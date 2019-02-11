import { Resolvers } from "../../../types/resolvers";
import {
  RequestEmailVerificationResponse,
  RequestEmailVerificationMutationArgs
} from "../../../types/graphql";
import User from "../../../entities/User";
import sendEmail from "../../../utils/sendEmail";
import Verification from "../../../entities/Verification";
import encryptToHash from "../../../utils/encryptToHash";

const resolvers: Resolvers = {
  Mutation: {
    RequestEmailVerification: async (
      _,
      args: RequestEmailVerificationMutationArgs
    ): Promise<RequestEmailVerificationResponse> => {
      const { email, password } = args;

      try {
        //이미 인증 대기중인 이메일인지 확인
        const existUser = await User.findOne({ email });

        if (existUser) {
          if (existUser.verifiedEmail) {
            return {
              ok: false,
              error: "이미 등록된 이메일입니다"
            };
          } else {
            const existVerification = await Verification.findOne({ email });
            if (existVerification) {
              existVerification.remove();
            }
            existUser.remove();
          }
        }

        // 이전에 등록 신청을 하지 않은 신규 가입자의 경우
        const encryptPassword = await encryptToHash(password);
        const newUser = await User.create({
          email,
          password: encryptPassword
        }).save();
        const verification = await Verification.create({ email }).save();

        await sendEmail({
          to: email,
          userId: newUser.id,
          verificationCode: verification.verifiedCode
        });

        return {
          ok: true,
          error: null
        };
      } catch (error) {
        return {
          ok: false,
          error: error.message
        };
      }
    }
  }
};

export default resolvers;
