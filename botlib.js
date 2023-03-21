import axios from "axios";
import { encrypt, decrypt, secret } from "./crypto.js";
import fs from "fs";
class Bot {
    constructor(auth) {
        this.auth = secret(auth);
        this.defAuth = auth;
        this.access_hash_rec = "";
    }
    async sendMessage(target, massege, repMsg) {
        try {
            if (repMsg) {
                var resp = await axios.post(
                    "https://messengerg2c17.iranlms.ir/",
                    {
                        api_version: "5",
                        auth: this.defAuth,
                        data_enc: encrypt(
                            this.auth,
                            JSON.stringify({
                                method: "sendMessage",
                                input: {
                                    object_guid: target,
                                    rnd: Math.floor(
                                        Math.random(100000) * 900000
                                    ),
                                    text: massege,
                                    reply_to_message_id: repMsg,
                                },
                                client: {
                                    app_name: "Main",
                                    app_version: "3.2.1",
                                    platform: "Web",
                                    package: "web.rubika.ir",
                                    lang_code: "fa",
                                },
                            })
                        ),
                    }
                );
                var data = decrypt(this.auth, resp.data.data_enc);

                return JSON.parse(data);
            } else {
                var resp = await axios.post(
                    "https://messengerg2c17.iranlms.ir/",
                    {
                        api_version: "5",
                        auth: this.defAuth,
                        data_enc: encrypt(
                            this.auth,
                            JSON.stringify({
                                method: "sendMessage",
                                input: {
                                    object_guid: target,
                                    rnd: Math.floor(
                                        Math.random(100000) * 900000
                                    ),
                                    text: massege,
                                },
                                client: {
                                    app_name: "Main",
                                    app_version: "3.2.1",
                                    platform: "Web",
                                    package: "web.rubika.ir",
                                    lang_code: "fa",
                                },
                            })
                        ),
                    }
                );
                var data = decrypt(this.auth, resp.data.data_enc);
                return JSON.parse(data);
            }
        } catch (err) {
            throw err;
        }
    }
    async deleteMessages(chatID, messagesID, global) {
        try {
            if (global) {
                var resp = await axios.post(
                    "https://messengerg2c17.iranlms.ir/",
                    {
                        api_version: "5",
                        auth: this.defAuth,
                        data_enc: encrypt(
                            this.auth,
                            JSON.stringify({
                                method: "deleteMessages",
                                input: {
                                    object_guid: chatID,
                                    message_ids: messagesID,
                                    type: "Local",
                                },
                                client: {
                                    app_name: "Main",
                                    app_version: "3.2.1",
                                    platform: "Web",
                                    package: "web.rubika.ir",
                                    lang_code: "fa",
                                },
                            })
                        ),
                    }
                );
                return JSON.parse(decrypt(this.auth, resp.data.data_enc));
            } else {
                var resp = await axios.post(
                    "https://messengerg2c17.iranlms.ir/",
                    {
                        api_version: "5",
                        auth: this.defAuth,
                        data_enc: encrypt(
                            this.auth,
                            JSON.stringify({
                                method: "deleteMessages",
                                input: {
                                    object_guid: chatID,
                                    message_ids: messagesID,
                                    type: "Global",
                                },
                                client: {
                                    app_name: "Main",
                                    app_version: "3.2.1",
                                    platform: "Web",
                                    package: "web.rubika.ir",
                                    lang_code: "fa",
                                },
                            })
                        ),
                    }
                );
                return JSON.parse(decrypt(this.auth, resp.data.data_enc));
            }
        } catch (err) {
            throw err;
        }
    }
    async getUserInfo(userGuid) {
        try {
            var resp = await axios.post("https://messengerg2c17.iranlms.ir/", {
                api_version: "5",
                auth: this.defAuth,
                data_enc: encrypt(
                    this.auth,
                    JSON.stringify({
                        method: "getUserInfo",
                        input: {
                            user_guid: userGuid,
                        },
                        client: {
                            app_name: "Main",
                            app_version: "3.2.1",
                            platform: "Web",
                            package: "web.rubika.ir",
                            lang_code: "fa",
                        },
                    })
                ),
            });
            return JSON.parse(decrypt(this.auth, resp.data.data_enc));
        } catch (err) {
            throw err;
        }
    }
    async getUserInfoById(userid) {
        try {
            var resp = await axios.post("https://messengerg2c17.iranlms.ir/", {
                api_version: "5",
                auth: this.defAuth,
                data_enc: encrypt(
                    this.auth,
                    JSON.stringify({
                        method: "getObjectByUsername",
                        input: {
                            username: userid,
                        },
                        client: {
                            app_name: "Main",
                            app_version: "3.2.1",
                            platform: "Web",
                            package: "web.rubika.ir",
                            lang_code: "fa",
                        },
                    })
                ),
            });
            return JSON.parse(decrypt(this.auth, resp.data.data_enc));
        } catch (err) {
            throw err;
        }
    }
    async getMessages(chatId, minId) {
        try {
            var resp = await axios.post("https://messengerg2c17.iranlms.ir/", {
                api_version: "5",
                auth: this.defAuth,
                data_enc: encrypt(
                    this.auth,
                    JSON.stringify({
                        method: "getMessagesInterval",
                        input: {
                            object_guid: chatId,
                            middle_message_id: minId,
                        },
                        client: {
                            app_name: "Main",
                            app_version: "3.2.1",
                            platform: "Web",
                            package: "web.rubika.ir",
                            lang_code: "fa",
                        },
                    })
                ),
            });
            return JSON.parse(decrypt(this.auth, resp.data.data_enc));
        } catch (err) {
            throw err;
        }
    }
    async removeMember(groupId, userId) {
        try {
            var resp = await axios.post("https://messengerg2c17.iranlms.ir/", {
                api_version: "5",
                auth: this.defAuth,
                data_enc: encrypt(
                    this.auth,
                    JSON.stringify({
                        method: "banGroupMember",
                        input: {
                            group_guid: groupId,
                            member_guid: userId,
                            action: "Set",
                        },
                        client: {
                            app_name: "Main",
                            app_version: "3.2.1",
                            platform: "Web",
                            package: "web.rubika.ir",
                            lang_code: "fa",
                        },
                    })
                ),
            });
            return JSON.parse(decrypt(this.auth, resp.data.data_enc));
        } catch (err) {
            throw err;
        }
    }
    async addGroupMembers(groupId, usersId) {
        try {
            var resp = await axios.post("https://messengerg2c17.iranlms.ir/", {
                api_version: "5",
                auth: this.defAuth,
                data_enc: encrypt(
                    this.auth,
                    JSON.stringify({
                        method: "addGroupMembers",
                        input: {
                            group_guid: groupId,
                            member_guids: usersId,
                        },
                        client: {
                            app_name: "Main",
                            app_version: "3.2.1",
                            platform: "Web",
                            package: "web.rubika.ir",
                            lang_code: "fa",
                        },
                    })
                ),
            });
            return JSON.parse(decrypt(this.auth, resp.data.data_enc));
        } catch (err) {
            throw err;
        }
    }
    async getAdmins(groupId) {
        try {
            var resp = await axios.post("https://messengerg2c17.iranlms.ir/", {
                api_version: "5",
                auth: this.defAuth,
                data_enc: encrypt(
                    this.auth,
                    JSON.stringify({
                        method: "getGroupAdminMembers",
                        input: {
                            group_guid: groupId,
                        },
                        client: {
                            app_name: "Main",
                            app_version: "3.2.1",
                            platform: "Web",
                            package: "web.rubika.ir",
                            lang_code: "fa",
                        },
                    })
                ),
            });
            return JSON.parse(decrypt(this.auth, resp.data.data_enc));
        } catch (err) {
            throw err;
        }
    }
    async getMessagesById(groupId, messagesId) {
        try {
            var resp = await axios.post("https://messengerg2c17.iranlms.ir/", {
                api_version: "5",
                auth: this.defAuth,
                data_enc: encrypt(
                    this.auth,
                    JSON.stringify({
                        method: "getMessagesByID",
                        input: {
                            object_guid: groupId,
                            message_ids: messagesId,
                        },
                        client: {
                            app_name: "Main",
                            app_version: "3.2.1",
                            platform: "Web",
                            package: "web.rubika.ir",
                            lang_code: "fa",
                        },
                    })
                ),
            });
            return JSON.parse(decrypt(this.auth, resp.data.data_enc));
        } catch (err) {
            throw err;
        }
    }
    async setUserAccess(groupId, acList) {
        try {
            var resp = await axios.post("https://messengerg2c17.iranlms.ir/", {
                api_version: "5",
                auth: this.defAuth,
                data_enc: encrypt(
                    this.auth,
                    JSON.stringify({
                        method: "setGroupDefaultAccess",
                        input: {
                            access_list: acList,
                            group_guid: groupId,
                        },
                        client: {
                            app_name: "Main",
                            app_version: "3.2.1",
                            platform: "Web",
                            package: "web.rubika.ir",
                            lang_code: "fa",
                        },
                    })
                ),
            });
            return JSON.parse(decrypt(this.auth, resp.data.data_enc));
        } catch (err) {
            throw err;
        }
    }
    async getGroupMembers(groupId) {
        try {
            var resp = await axios.post("https://messengerg2c17.iranlms.ir/", {
                api_version: "5",
                auth: this.defAuth,
                data_enc: encrypt(
                    this.auth,
                    JSON.stringify({
                        method: "getGroupAllMembers",
                        input: {
                            group_guid: groupId,
                        },
                        client: {
                            app_name: "Main",
                            app_version: "3.2.1",
                            platform: "Web",
                            package: "web.rubika.ir",
                            lang_code: "fa",
                        },
                    })
                ),
            });
            return JSON.parse(decrypt(this.auth, resp.data.data_enc));
        } catch (err) {
            throw err;
        }
    }
    async getGroupInfo(groupId) {
        try {
            var resp = await axios.post("https://messengerg2c17.iranlms.ir/", {
                api_version: "5",
                auth: this.defAuth,
                data_enc: encrypt(
                    this.auth,
                    JSON.stringify({
                        method: "getGroupInfo",
                        input: {
                            group_guid: groupId,
                        },
                        client: {
                            app_name: "Main",
                            app_version: "3.2.1",
                            platform: "Web",
                            package: "web.rubika.ir",
                            lang_code: "fa",
                        },
                    })
                ),
            });

            return JSON.parse(decrypt(this.auth, resp.data.data_enc));
        } catch (err) {
            throw err;
        }
    }
    async getGroupLink(groupId) {
        try {
            var resp = await axios.post("https://messengerg2c17.iranlms.ir/", {
                api_version: "5",
                auth: this.defAuth,
                data_enc: encrypt(
                    this.auth,
                    JSON.stringify({
                        method: "getGroupLink",
                        input: {
                            group_guid: groupId,
                        },
                        client: {
                            app_name: "Main",
                            app_version: "3.2.1",
                            platform: "Web",
                            package: "web.rubika.ir",
                            lang_code: "fa",
                        },
                    })
                ),
            });
            return decrypt(this.auth, resp.data.data_enc);
        } catch (err) {
            throw err;
        }
    }
    async getMessagesUpdates(gpId) {
        try {
            var resp = await axios.post("https://messengerg2c17.iranlms.ir/", {
                api_version: "5",
                auth: this.defAuth,
                data_enc: encrypt(
                    this.auth,
                    JSON.stringify({
                        method: "getMessagesUpdates",
                        input: {
                            object_guid: gpId,
                            state: Math.floor(Date.now() / 1000) - 200,
                        },
                        client: {
                            app_name: "Main",
                            app_version: "4.1.11",
                            platform: "Web",
                            package: "web.rubika.ir",
                            lang_code: "fa",
                        },
                    })
                ),
            });
            return JSON.parse(decrypt(this.auth, resp.data.data_enc));
        } catch (err) {
            throw err;
        }
    }
    async GetChatsUpdates() {
        try {
            var resp = await axios.post("https://messengerg2c72.iranlms.ir/", {
                api_version: "5",
                auth: this.defAuth,
                data_enc: encrypt(
                    this.auth,
                    JSON.stringify({
                        method: "getChatsUpdates",
                        input: { state: Math.floor(Date.now() / 1000) - 200 },
                        client: {
                            app_name: "Main",
                            app_version: "4.1.11",
                            platform: "Web",
                            package: "web.rubika.ir",
                            lang_code: "fa",
                        },
                    })
                ),
            });
            return JSON.parse(decrypt(this.auth, resp.data.data_enc));
        } catch (err) {
            throw err;
        }
    }
    async editMessage(chatId, pymId, newText) {
        try {
            var resp = await axios.post("https://messengerg2c17.iranlms.ir/", {
                api_version: "5",
                auth: this.defAuth,
                data_enc: encrypt(
                    this.auth,
                    JSON.stringify({
                        method: "getMessagesInterval",
                        input: {
                            message_id: pymId,
                            object_guid: chatId,
                            text: newText,
                        },
                        client: {
                            app_name: "Main",
                            app_version: "3.2.1",
                            platform: "Web",
                            package: "web.rubika.ir",
                            lang_code: "fa",
                        },
                    })
                ),
            });
            return JSON.parse(decrypt(this.auth, resp.data.data_enc));
        } catch (err) {
            throw err;
        }
    }
    async cancelRemoveMember(groupId, userId) {
        try {
            var resp = await axios.post("https://messengerg2c17.iranlms.ir/", {
                api_version: "5",
                auth: this.defAuth,
                data_enc: encrypt(
                    this.auth,
                    JSON.stringify({
                        method: "banGroupMember",
                        input: {
                            group_guid: groupId,
                            member_guid: userId,
                            action: "Unset",
                        },
                        client: {
                            app_name: "Main",
                            app_version: "3.2.1",
                            platform: "Web",
                            package: "web.rubika.ir",
                            lang_code: "fa",
                        },
                    })
                ),
            });
            return JSON.parse(decrypt(this.auth, resp.data.data_enc));
        } catch (err) {
            throw err;
        }
    }
    async addChannelMembers(groupId, usersId) {
        try {
            var resp = await axios.post("https://messengerg2c17.iranlms.ir/", {
                api_version: "5",
                auth: this.defAuth,
                data_enc: encrypt(
                    this.auth,
                    JSON.stringify({
                        method: "addChannelMembers",
                        input: {
                            channel_guid: groupId,
                            member_guids: usersId,
                        },
                        client: {
                            app_name: "Main",
                            app_version: "3.2.1",
                            platform: "Web",
                            package: "web.rubika.ir",
                            lang_code: "fa",
                        },
                    })
                ),
            });
            return JSON.parse(decrypt(this.auth, resp.data.data_enc));
        } catch (err) {
            throw err;
        }
    }
    async setGroupLink(groupId) {
        try {
            var resp = await axios.post("https://messengerg2c17.iranlms.ir/", {
                api_version: "5",
                auth: this.defAuth,
                data_enc: encrypt(
                    this.auth,
                    JSON.stringify({
                        method: "setGroupLink",
                        input: {
                            group_guid: groupId,
                        },
                        client: {
                            app_name: "Main",
                            app_version: "3.2.1",
                            platform: "Web",
                            package: "web.rubika.ir",
                            lang_code: "fa",
                        },
                    })
                ),
            });
            return JSON.parse(decrypt(this.auth, resp.data.data_enc));
        } catch (err) {
            throw err;
        }
    }
    async setGroupLink(groupId, slowTime) {
        try {
            var resp = await axios.post("https://messengerg2c17.iranlms.ir/", {
                api_version: "5",
                auth: this.defAuth,
                data_enc: encrypt(
                    this.auth,
                    JSON.stringify({
                        method: "editGroupInfo",
                        input: {
                            group_guid: groupId,
                            slow_mode: slowTime,
                            updated_parameters: ["slow_mode"],
                        },
                        client: {
                            app_name: "Main",
                            app_version: "3.2.1",
                            platform: "Web",
                            package: "web.rubika.ir",
                            lang_code: "fa",
                        },
                    })
                ),
            });
            return JSON.parse(decrypt(this.auth, resp.data.data_enc));
        } catch (err) {
            throw err;
        }
    }
    async addAdmin(groupId, userId, acList) {
        try {
            var resp = await axios.post("https://messengerg2c17.iranlms.ir/", {
                api_version: "5",
                auth: this.defAuth,
                data_enc: encrypt(
                    this.auth,
                    JSON.stringify({
                        method: "setGroupAdmin",
                        input: {
                            group_guid: groupId,
                            access_list: acList,
                            action: "SetAdmin",
                            member_guid: userId,
                        },
                        client: {
                            app_name: "Main",
                            app_version: "3.2.1",
                            platform: "Web",
                            package: "web.rubika.ir",
                            lang_code: "fa",
                        },
                    })
                ),
            });
            return JSON.parse(decrypt(this.auth, resp.data.data_enc));
        } catch (err) {
            throw err;
        }
    }
    async removeAdmin(groupId, userId) {
        try {
            var resp = await axios.post("https://messengerg2c17.iranlms.ir/", {
                api_version: "5",
                auth: this.defAuth,
                data_enc: encrypt(
                    this.auth,
                    JSON.stringify({
                        method: "setGroupAdmin",
                        input: {
                            group_guid: groupId,
                            action: "UnsetAdmin",
                            member_guid: userId,
                        },
                        client: {
                            app_name: "Main",
                            app_version: "3.2.1",
                            platform: "Web",
                            package: "web.rubika.ir",
                            lang_code: "fa",
                        },
                    })
                ),
            });
            return JSON.parse(decrypt(this.auth, resp.data.data_enc));
        } catch (err) {
            throw err;
        }
    }
    async pin(groupId, msgId) {
        try {
            var resp = await axios.post("https://messengerg2c17.iranlms.ir/", {
                api_version: "5",
                auth: this.defAuth,
                data_enc: encrypt(
                    this.auth,
                    JSON.stringify({
                        method: "setPinMessage",
                        input: {
                            object_guid: groupId,
                            message_id: msgId,
                            action: "Pin",
                        },
                        client: {
                            app_name: "Main",
                            app_version: "3.2.1",
                            platform: "Web",
                            package: "web.rubika.ir",
                            lang_code: "fa",
                        },
                    })
                ),
            });
            return JSON.parse(decrypt(this.auth, resp.data.data_enc));
        } catch (err) {
            throw err;
        }
    }
    async Unpin(groupId, msgId) {
        try {
            var resp = await axios.post("https://messengerg2c17.iranlms.ir/", {
                api_version: "5",
                auth: this.defAuth,
                data_enc: encrypt(
                    this.auth,
                    JSON.stringify({
                        method: "setPinMessage",
                        input: {
                            object_guid: groupId,
                            message_id: msgId,
                            action: "Unpin",
                        },
                        client: {
                            app_name: "Main",
                            app_version: "3.2.1",
                            platform: "Web",
                            package: "web.rubika.ir",
                            lang_code: "fa",
                        },
                    })
                ),
            });
            return JSON.parse(decrypt(this.auth, resp.data.data_enc));
        } catch (err) {
            throw err;
        }
    }
    async left(gpId) {
        try {
            var resp = await axios.post("https://messengerg2c17.iranlms.ir/", {
                api_version: "5",
                auth: this.defAuth,
                data_enc: encrypt(
                    this.auth,
                    JSON.stringify({
                        method: "leaveGroup",
                        input: {
                            group_guid: gpId,
                        },
                        client: {
                            app_name: "Main",
                            app_version: "3.2.1",
                            platform: "Web",
                            package: "web.rubika.ir",
                            lang_code: "fa",
                        },
                    })
                ),
            });
            return JSON.parse(decrypt(this.auth, resp.data.data_enc));
        } catch (err) {
            throw err;
        }
    }

    async forwardMessages(from, to, msgs) {
        try {
            var resp = await axios.post("https://messengerg2c17.iranlms.ir/", {
                api_version: "5",
                auth: this.defAuth,
                data_enc: encrypt(
                    this.auth,
                    JSON.stringify({
                        method: "forwardMessages",
                        input: {
                            from_object_guid: from,
                            to_object_guid: to,
                            message_ids: msgs,
                            rnd: Math.floor(Math.random(100000) * 900000),
                        },
                        client: {
                            app_name: "Main",
                            app_version: "3.2.1",
                            platform: "Web",
                            package: "web.rubika.ir",
                            lang_code: "fa",
                        },
                    })
                ),
            });
            return JSON.parse(decrypt(this.auth, resp.data.data_enc));
        } catch (err) {
            throw err;
        }
    }

    async joinGroup(link) {
        var hash = link.slice(link.lastIndexOf("/") + 1);
        try {
            var resp = await axios.post("https://messengerg2c17.iranlms.ir/", {
                api_version: "5",
                auth: this.defAuth,
                data_enc: encrypt(
                    this.auth,
                    JSON.stringify({
                        method: "joinGroup",
                        input: {
                            hash_link: hash,
                        },
                        client: {
                            app_name: "Main",
                            app_version: "3.2.1",
                            platform: "Web",
                            package: "web.rubika.ir",
                            lang_code: "fa",
                        },
                    })
                ),
            });
            return JSON.parse(decrypt(this.auth, resp.data.data_enc));
        } catch (err) {
            throw err;
        }
    }

    async leaveGroup(gpGd) {
        try {
            var resp = await axios.post("https://messengerg2c17.iranlms.ir/", {
                api_version: "5",
                auth: this.defAuth,
                data_enc: encrypt(
                    this.auth,
                    JSON.stringify({
                        method: "leaveGroup",
                        input: {
                            group_guid: gpGd,
                        },
                        client: {
                            app_name: "Main",
                            app_version: "3.2.1",
                            platform: "Web",
                            package: "web.rubika.ir",
                            lang_code: "fa",
                        },
                    })
                ),
            });
            return JSON.parse(decrypt(this.auth, resp.data.data_enc));
        } catch (err) {
            throw err;
        }
    }

    async seen(seenlist) {
        try {
            var resp = await axios.post("https://messengerg2c17.iranlms.ir/", {
                api_version: "5",
                auth: this.defAuth,
                data_enc: encrypt(
                    this.auth,
                    JSON.stringify({
                        method: "seenChats",
                        input: { seen_list: seenlist },
                        client: {
                            app_name: "Main",
                            app_version: "4.1.11",
                            platform: "Web",
                            package: "web.rubika.ir",
                            lang_code: "fa",
                        },
                    })
                ),
            });
            return JSON.parse(decrypt(this.auth, resp.data.data_enc));
        } catch (err) {
            throw err;
        }
    }

    async uploadFile(file, target, text) {
        try {
            var bytef;
            if(!file.includes("http") && !file.includes("https")){
               bytef = fs.readFileSync(file);
            }else{
               const filereq = await axios.get(file, { responseType: 'arraybuffer' });
               bytef = Buffer.from(filereq.data, 'binary');
            }
            const size = bytef.byteLength;
            var filename = file.split("/");
            filename = filename[filename.length - 1];
            var mime = file.split(".");
            mime = mime[mime.length - 1];
            var acessData = await axios.post(
                "https://messengerg2c97.iranlms.ir/",
                {
                    api_version: "5",
                    auth: this.defAuth,
                    data_enc: encrypt(
                        this.auth,
                        JSON.stringify({
                            method: "requestSendFile",
                            input: {
                                file_name: filename,
                                size: size,
                                mime: mime,
                            },
                            client: {
                                app_name: "Main",
                                app_version: "3.2.1",
                                platform: "Web",
                                package: "web.rubika.ir",
                                lang_code: "fa",
                            },
                        })
                    ),
                }
            );
            acessData = JSON.parse(decrypt(this.auth, acessData.data.data_enc));
            var Headers = {
                auth: this.defAuth,
                "chunk-size": size.toString(),
                "part-number": "1",
                "total-part": "1",
                "file-id": acessData.data.id,
                "access-hash-send": acessData.data.access_hash_send,
                "content-type": "application/octet-stream",
                "content-length": size.toString(),
            };
            if (size <= 131072) {
                var result = await axios.post(
                    acessData.data.upload_url,
                    bytef,
                    {
                        headers: Headers,
                    }
                );
                this.acess_hash_rec = result.data.data.access_hash_rec;
                if (text) {
                    
                    var resp = await axios.post(
                        "https://messengerg2c17.iranlms.ir/",
                        {
                            api_version: "5",
                            auth: this.defAuth,
                            data_enc: encrypt(
                                this.auth,
                                JSON.stringify({
                                    method: "sendMessage",
                                    input: {
                                        object_guid: target,
                                        rnd: Math.floor(
                                            Math.random(100000) * 900000
                                        ),
                                        file_inline: {
                                            dc_id: acessData.data.dc_id,
                                            file_id: acessData.data.id,
                                            type: "File",
                                            file_name: filename,
                                            size: size,
                                            mime: mime,
                                            access_hash_rec: this
                                                .acess_hash_rec,
                                        },
                                        text: text,
                                    },
                                    client: {
                                        app_name: "Main",
                                        app_version: "3.2.1",
                                        platform: "Web",
                                        package: "web.rubika.ir",
                                        lang_code: "fa",
                                    },
                                })
                            ),
                        }
                    );
                       return JSON.parse(decrypt(this.auth, resp.data.data_enc))
                   
                } else {
                    var resp = await axios.post(
                        "https://messengerg2c17.iranlms.ir/",
                        {
                            api_version: "5",
                            auth: this.defAuth,
                            data_enc: encrypt(
                                this.auth,
                                JSON.stringify({
                                    method: "sendMessage",
                                    input: {
                                        object_guid: target,
                                        rnd: Math.floor(
                                            Math.random(100000) * 900000
                                        ),
                                        file_inline: {
                                            dc_id: acessData.data.dc_id,
                                            file_id: acessData.data.id,
                                            type: "File",
                                            file_name: filename,
                                            size: size,
                                            mime: mime,
                                            access_hash_rec: this.acess_hash_rec,
                                        },
                                    },
                                    client: {
                                        app_name: "Main",
                                        app_version: "3.2.1",
                                        platform: "Web",
                                        package: "web.rubika.ir",
                                        lang_code: "fa",
                                    },
                                })
                            ),
                        }
                    );
                       return JSON.parse(decrypt(this.auth, resp.data.data_enc))
                    
                }
            } else {
                const t = Math.floor(size / 131072) + 1;
                for (let i = 1; i < t + 1; i++) {
                    const k = (i - 1) * 131072;
                    const chunkSize = i != t ? "131072" : (size - k).toString();
                    const data = i != t ? bytef.slice(k, k + 131072) : bytef.slice(k);
                    Headers["chunk-size"] = chunkSize;
                    Headers["content-length"] = chunkSize;
                    Headers["part-number"] = i.toString();
                    Headers["total-part"] = t.toString();
                    var result = await axios.post(
                        acessData.data.upload_url,
                        data,
                        {
                            headers: Headers,
                        }
                    );
                    if (i == t) {
                        this.access_hash_rec = result.data.data.access_hash_rec;
                        if (text) {
                            var resp = await axios.post(
                                "https://messengerg2c17.iranlms.ir/",
                                {
                                    api_version: "5",
                                    auth: this.defAuth,
                                    data_enc: encrypt(
                                        this.auth,
                                        JSON.stringify({
                                            method: "sendMessage",
                                            input: {
                                                object_guid: target,
                                                rnd: Math.floor(
                                                    Math.random(100000) * 900000
                                                ),
                                                file_inline: {
                                                    dc_id: acessData.data.dc_id,
                                                    file_id: acessData.data.id,
                                                    type: "File",
                                                    file_name: filename,
                                                    size: size,
                                                    mime: mime,
                                                    access_hash_rec: this.access_hash_rec,
                                                },
                                                text: text,
                                            },
                                            client: {
                                                app_name: "Main",
                                                app_version: "3.2.1",
                                                platform: "Web",
                                                package: "web.rubika.ir",
                                                lang_code: "fa",
                                            },
                                        })
                                    ),
                                }
                            );
                                return JSON.parse(
                                    decrypt(this.auth, resp.data.data_enc)
                                )
                        } else {
                            var resp = await axios.post(
                                "https://messengerg2c17.iranlms.ir/",
                                {
                                    api_version: "5",
                                    auth: this.defAuth,
                                    data_enc: encrypt(
                                        this.auth,
                                        JSON.stringify({
                                            method: "sendMessage",
                                            input: {
                                                object_guid: target,
                                                rnd: Math.floor(
                                                    Math.random(100000) * 900000
                                                ),
                                                file_inline: {
                                                    dc_id: acessData.data.dc_id,
                                                    file_id: acessData.data.id,
                                                    type: "File",
                                                    file_name: filename,
                                                    size: size,
                                                    mime: mime,
                                                    access_hash_rec: this.access_hash_rec,
                                                },
                                            },
                                            client: {
                                                app_name: "Main",
                                                app_version: "3.2.1",
                                                platform: "Web",
                                                package: "web.rubika.ir",
                                                lang_code: "fa",
                                            },
                                        })
                                    ),
                                }
                            );
                            
                                return JSON.parse(
                                    decrypt(this.auth, resp.data.data_enc)
                                )
                        }
                    }
                }
            }
        } catch (err) {
            throw err
        }
    }
}
export { Bot };
