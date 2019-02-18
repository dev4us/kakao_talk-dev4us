import { gql } from "apollo-boost";

export const VERIFY_EMAIL = gql`
  mutation verifyEmail($userId:Int!, verifiedCode:String!){
    CompleteEmailVerification(userId:$userId, verifiedCode: $verifiedCode){
      ok
      error
    }
  }
`;
