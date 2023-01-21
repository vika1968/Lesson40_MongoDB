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
function handleLogin(ev) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            ev.preventDefault();
            const password = ev.target.elements.password.value;
            const email = ev.target.elements.email.value;
            console.log(password, email);
            //@ts-ignore
            const { data } = yield axios.post("/api/users/login", { password, email });
            console.log(data);
            const { ok } = data;
            if (ok) {
                console.log("suuccesful Login");
            }
        }
        catch (error) {
            console.error(error);
        }
    });
}
function handleRegister(ev) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            ev.preventDefault();
            const password = ev.target.elements.password.value;
            const email = ev.target.elements.email.value;
            console.log(password, email);
            //@ts-ignore
            const { data } = yield axios.post("/api/users/register", {
                password,
                email,
            });
            console.log(data);
        }
        catch (error) {
            console.error(error);
        }
    });
}
function handlegetAllUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            //@ts-ignore
            const { data } = yield axios.get("/api/users");
            console.log(data);
        }
        catch (error) {
            console.error(error);
        }
    });
}
function getUserById(event) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            event.preventDefault();
            const userId = event.target.elements.userId.value;
            //@ts-ignore
            const { data } = yield axios.get(`/api/users/${userId}`);
            console.log(data);
        }
        catch (error) {
        }
    });
}
