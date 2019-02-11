import { Resolvers } from "../../../types/resolvers";
import {
  CompleteEmailVerificationMutationArgs,
  CompleteEmailVerificationResponse
} from "../../../types/graphql";
import User from "../../../entities/User";
import Verification from "../../../entities/Verification";

const resolvers: Resolvers = {
  Mutation: {
    CompleteEmailVerification: async (
      _,
      args: CompleteEmailVerificationMutationArgs
    ): Promise<CompleteEmailVerificationResponse> => {
      const { userId, verifiedCode } = args;

      try {
        const user = await User.findOne({ id: userId });

        if (user) {
          const verification = await Verification.findOne({
            email: user.email,
            verifiedCode
          });

          if (verification) {
            verification.isVerified = true;
            verification.save();

            user.verifiedEmail = true;
            user.save();
            return {
              ok: true,
              error: null
            };
          } else {
            return {
              ok: false,
              error: "이메일 인증 번호가 일치하지 않습니다."
            };
          }
        } else {
          return {
            ok: false,
            error: "요청하신 이메일에 해당하는 계정이 존재하지 않습니다."
          };
        }
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
