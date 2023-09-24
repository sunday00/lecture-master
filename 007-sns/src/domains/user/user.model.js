import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        minLength: 5
    },
    googleId: {
        type: String,
        unique: true,
        sparse: true,
    },
    kakaoId: {
        type: String,
        unique: true,
        sparse: true,
    },
    username: {
        type: String,
        required: true,
        trim: true,
    },
    firstName: {
        type: String,
        default: 'First Name'
    },
    lastName: {
        type: String,
        default: 'Last Name'
    },
    bio: {
        type: String,
        default: '데이터 없음'
    },
    hometown: {
        type: String,
        default: '데이터 없음'
    },
    workspace: {
        type: String,
        default: '데이터 없음'
    },
    education: {
        type: String,
        default: '데이터 없음'
    },
    contact: {
        type: String,
        default: '데이터 없음'
    },
    friends: [{ type: String }],
    friendsRequests: [{ type: String }]
}, { timestamps: true })

userSchema.pre('save', function (next) {
    let user = this;
    // 비밀번호가 변경될 때만
    if (user.isModified('password')) {
        // salt를 생성합니다.
        bcrypt.genSalt(10, function (err, salt) {
            if (err) return next(err);

            bcrypt.hash(user.password, salt, function (err, hash) {
                if (err) return next(err);
                user.password = hash;
                next();
            })
        })
    } else {
        next();
    }
})

userSchema.methods.comparePassword = function (password, cb) {
    // if(password === this.password) cb(null, true)
    // else cb(null, false)
    //
    // return cb({ error: 'error' })

    bcrypt.compare(password, this.password, function (err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    })
}

export const User = mongoose.model('User', userSchema)
