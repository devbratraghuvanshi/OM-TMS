import * as Passport from 'passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { jWtSecret} from './../utility/utility'
import UserCredential from './../api/model/userCredential'

//use this for autherization
export class PassportAuth {

    public initialize() {
        Passport.use(this.getStrategy());
        return Passport.initialize();
    }

    private getStrategy():Strategy {
        return new Strategy(
            { secretOrKey: jWtSecret, jwtFromRequest: ExtractJwt.fromAuthHeader() },
            (jwt_payload, done) => {
                UserCredential.findOne({ userId: jwt_payload.userId }, (err, credential) => {
                    if (credential) {
                        return done(null, { userId: credential.userId });
                    } else {
                        return done(new Error("User not found"), null);
                    }
                });
            });
    }

    public getAuthHandler() {
        return Passport.authenticate("jwt", { session: false });
    }
}

const Auth = new PassportAuth();

export const AuthHandler = Auth.getAuthHandler();

export default Auth;