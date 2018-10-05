import { combineReducers } from 'redux';

import ToggleSignupReducer from './authentication/ToggleSignupReducer';
import ToggleLoginReducer from './authentication/ToggleLoginReducer';
import TogglePasswordResetRequestReducer from './authentication/TogglePasswordResetRequestReducer';
import SignupStatusReducer from './authentication/SignupStatusReducer';
import LoginStatusReducer from './authentication/LoginStatusReducer';
import FacebookLoginStatusReducer from './authentication/FacebookLoginStatusReducer';
import FacebookLoginRenderStatusReducer from './authentication/FacebookLoginRenderStatusReducer';
import TokenReducer from './authentication/TokenReducer';
import RefreshTokenStatusReducer from './authentication/RefreshTokenStatusReducer';
import UserInfoReducer from './authentication/UserInfoReducer';
import EmailVerifyRequestStatusReducer from './authentication/EmailVerifyRequestStatusReducer';
import EmailVerifyStatusReducer from './authentication/EmailVerifyStatusReducer';
import PasswordResetRequestStatusReducer from './authentication/PasswordResetRequestStatusReducer';
import PasswordResetStatusReducer from './authentication/PasswordResetStatusReducer';
import ConfirmCredentialsStatusReducer from './authentication/ConfirmCredentialsStatusReducer';
import PasswordChangeStatusReducer from './authentication/PasswordChangeStatusReducer';
import EmailChangeStatusReducer from './authentication/EmailChangeStatusReducer';
import AccountDeactivateStatusReducer from './authentication/AccountDeactivateStatusReducer';

import ToggleMenuReducer from './ToggleMenuReducer';
import SearchResultsReducer from './SearchResultsReducer';
import SourcesReducer from './SourcesReducer';
import FollowingListReducer from './FollowingListReducer';
import QuotesReducer from './QuotesReducer';

const rootReducer = combineReducers({
  displaySignup: ToggleSignupReducer,
  displayLogin: ToggleLoginReducer,
  displayPasswordResetRequest: TogglePasswordResetRequestReducer,
  signupStatus: SignupStatusReducer,
  loginStatus: LoginStatusReducer,
  facebookLoginStatus: FacebookLoginStatusReducer,
  facebookLoginRenderStatus: FacebookLoginRenderStatusReducer,
  token: TokenReducer,
  refreshTokenStatus: RefreshTokenStatusReducer,  
  userInfo: UserInfoReducer,
  emailVerifyRequestStatus: EmailVerifyRequestStatusReducer,
  emailVerifyStatus: EmailVerifyStatusReducer,
  passwordResetRequestStatus: PasswordResetRequestStatusReducer,
  passwordResetStatus: PasswordResetStatusReducer,
  confirmCredentialsStatus: ConfirmCredentialsStatusReducer,
  passwordChangeStatus: PasswordChangeStatusReducer,
  emailChangeStatus: EmailChangeStatusReducer,
  accountDeactivateStatus: AccountDeactivateStatusReducer,
  
  displayMenu: ToggleMenuReducer,
  searchResults: SearchResultsReducer,
  sources: SourcesReducer,
  followingList: FollowingListReducer,
  quotes: QuotesReducer
});

export default rootReducer;