"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var models_1 = require("../models");
/**
 *
 * The user repository
 * @category Repositorys
 * @class UserRepository
 * @implements {ICrud<IUser, string>}
 */
var UserRepository = /** @class */ (function () {
    function UserRepository() {
    }
    /**
     *
     *
     * @param {IUser} user - The user to create
     * @return {Promise<IUser>}  A user created
     * @memberof UserRepository
     */
    UserRepository.prototype.create = function (user) {
        return new Promise(function (resolve, reject) {
            user.save()
                .then(function (user) { return resolve(user); })["catch"](function (err) { return reject(err); });
        });
    };
    /**
     *
     *
     * @return {Promise<Array<IUser>>}  A list of users
     * @memberof UserRepository
     */
    UserRepository.prototype.list = function () {
        return new Promise(function (resolve, reject) {
            models_1.User.find({})
                .then(function (user) { return resolve(user); })["catch"](function (err) { return reject(err); });
        });
    };
    /**
     *
     *
     * @param {string} id - The id to find
     * @return {Promise<IUser>}  A User
     * @memberof UserRepository
     */
    UserRepository.prototype.getById = function (id) {
        return new Promise(function (resolve, reject) {
            models_1.User.findById(id)
                .then(function (user) { return resolve(user); })["catch"](function (err) { return reject(err); });
        });
    };
    /**
     *
     *
     * @param {IUser} user - The user to remove
     * @return {Promise<IUser>}  A user removed
     * @memberof UserRepository
     */
    UserRepository.prototype.remove = function (user) {
        var _this = this;
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        if (!user._id) return [3 /*break*/, 2];
                        return [4 /*yield*/, user.remove()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        resolve(user);
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        reject(error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); });
    };
    /**
     *
     *
     * @param {string} id - The id to find
     * @return {Promise<IUser>}  A user removed
     * @memberof UserRepository
     */
    UserRepository.prototype.removeById = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var userToDelete, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        return [4 /*yield*/, models_1.User.findByIdAndRemove(id)];
                    case 1:
                        userToDelete = _a.sent();
                        if (!userToDelete) return [3 /*break*/, 3];
                        return [4 /*yield*/, userToDelete.remove()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        resolve(userToDelete);
                        return [3 /*break*/, 5];
                    case 4:
                        error_2 = _a.sent();
                        reject(error_2);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        }); });
    };
    /**
     *
     *
     * @param {IUser} user - The user to updated
     * @return {Promise<IUser>}  A user updated
     * @memberof UserRepository
     */
    UserRepository.prototype.update = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var error_3;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 3, , 4]);
                                    if (!user._id) return [3 /*break*/, 2];
                                    return [4 /*yield*/, user.update()];
                                case 1:
                                    _a.sent();
                                    _a.label = 2;
                                case 2:
                                    resolve(user);
                                    return [3 /*break*/, 4];
                                case 3:
                                    error_3 = _a.sent();
                                    reject(error_3);
                                    return [3 /*break*/, 4];
                                case 4: return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    /**
     *
     *
     * @param {string} id - The id to find
     * @param {IUser} user - The user to updated
     * @return {Promise<IUser>} A user updated
     * @memberof UserRepository
     */
    UserRepository.prototype.updateById = function (id, user) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var userToUpdate, error_4;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 2, , 3]);
                                    return [4 /*yield*/, models_1.User.findByIdAndUpdate(id, user, { "new": true })];
                                case 1:
                                    userToUpdate = _a.sent();
                                    resolve(userToUpdate);
                                    return [3 /*break*/, 3];
                                case 2:
                                    error_4 = _a.sent();
                                    reject(error_4);
                                    return [3 /*break*/, 3];
                                case 3: return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    return UserRepository;
}());
exports["default"] = new UserRepository();
