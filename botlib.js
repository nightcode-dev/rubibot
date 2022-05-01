import axios from 'axios';
import { encrypt, decrypt, secret } from './crypto.js';
class Bot {
    constructor(auth) {
        this.auth = secret(auth);
        this.defAuth = auth;
    }
    async sendMessage(target, massege,repMsg) {
       try{
        if(repMsg){
        var resp = await axios.post('https://messengerg2c17.iranlms.ir/', {
            "api_version": "5",
            "auth": this.defAuth,
            "data_enc": encrypt(this.auth, JSON.stringify({
                "method": "sendMessage",
                "input": {
                    "object_guid": target,
                    "rnd": Math.floor(Math.random(100000) * 900000),
                    "text": massege,
                    "reply_to_message_id":repMsg
                },
                "client": {
                    "app_name": "Main",
                    "app_version": "3.2.1",
                    "platform": "Web",
                    "package": "web.rubika.ir",
                    "lang_code": "fa"
                }
            }))
        })
            var data = decrypt(this.auth, resp.data.data_enc) 
            return data
           }else{
              var resp = await axios.post('https://messengerg2c17.iranlms.ir/', {
            "api_version": "5",
            "auth": this.defAuth,
            "data_enc": encrypt(this.auth, JSON.stringify({
                "method": "sendMessage",
                "input": {
                    "object_guid": target,
                    "rnd": Math.floor(Math.random(100000) * 900000),
                    "text": massege
                },
                "client": {
                    "app_name": "Main",
                    "app_version": "3.2.1",
                    "platform": "Web",
                    "package": "web.rubika.ir",
                    "lang_code": "fa"
                }
            }))
        })
            var data = decrypt(this.auth, resp.data.data_enc) 
            return data
           }
         }catch(err){
            throw err
         }  
    }
    async deleteMessages(chatID,messagesID){
      try{
      var resp = await axios.post('https://messengerg2c17.iranlms.ir/', {
            "api_version": "5",
            "auth": this.defAuth,
            "data_enc": encrypt(this.auth, JSON.stringify({
			"method":"deleteMessages",
			"input":{
				"object_guid":chatID,
				"message_ids":messagesID,
				"type":"Global"
			},
			"client":{
				"app_name":"Main",
				"app_version":"3.2.1",
				"platform":"Web",
				"package":"web.rubika.ir",
				"lang_code":"fa"
			}
		}))})
       return decrypt(this.auth, resp.data.data_enc);
       }catch(err){
          throw err
       }
    }
    async getUserInfo(userGuid){
      try{
      var resp = await axios.post('https://messengerg2c17.iranlms.ir/', {
            "api_version": "5",
            "auth": this.defAuth,
            "data_enc": encrypt(this.auth, JSON.stringify({
                "method": "getUserInfo",
                "input": {
                    "user_guid":userGuid
                },
                "client": {
                    "app_name": "Main",
                    "app_version": "3.2.1",
                    "platform": "Web",
                    "package": "web.rubika.ir",
                    "lang_code": "fa"
                }
       }))})
       return decrypt(this.auth, resp.data.data_enc);
       }catch(err){
          throw err
       }
    }
    async getUserInfoById(userid){
      try{
      var resp = await axios.post('https://messengerg2c17.iranlms.ir/', {
            "api_version": "5",
            "auth": this.defAuth,
            "data_enc": encrypt(this.auth, JSON.stringify({
                "method": "getObjectByUsername",
                "input": {
                    "username":userid
                },
                "client": {
                    "app_name": "Main",
                    "app_version": "3.2.1",
                    "platform": "Web",
                    "package": "web.rubika.ir",
                    "lang_code": "fa"
                }
       }))})
       return decrypt(this.auth, resp.data.data_enc);
       }catch(err){
          throw err
       }
    }
    async getMessages(chatId,minId){
      try{
      var resp = await axios.post('https://messengerg2c17.iranlms.ir/', {
            "api_version": "5",
            "auth": this.defAuth,
            "data_enc": encrypt(this.auth, JSON.stringify({
                "method": "getMessagesInterval",
                "input": {
                    "object_guid":chatId,
      				           "middle_message_id":minId
                },
                "client": {
                    "app_name": "Main",
                    "app_version": "3.2.1",
                    "platform": "Web",
                    "package": "web.rubika.ir",
                    "lang_code": "fa"
                }
       }))})
       return decrypt(this.auth, resp.data.data_enc);
       }catch(err){
          throw err
       }
    }
    async removeMember(groupId,userId){
      try{
      var resp = await axios.post('https://messengerg2c17.iranlms.ir/', {
            "api_version": "5",
            "auth": this.defAuth,
            "data_enc": encrypt(this.auth, JSON.stringify({
                "method": "banGroupMember",
                "input": {
                    "group_guid":groupId,
   				              "member_guid": userId,
				                 "action":"Set"
                },
                "client": {
                    "app_name": "Main",
                    "app_version": "3.2.1",
                    "platform": "Web",
                    "package": "web.rubika.ir",
                    "lang_code": "fa"
                }
       }))})
       return decrypt(this.auth, resp.data.data_enc);
       }catch(err){
          throw err
       }
    }
    async addGroupMembers(groupId,usersId){
      try{
      var resp = await axios.post('https://messengerg2c17.iranlms.ir/', {
            "api_version": "5",
            "auth": this.defAuth,
            "data_enc": encrypt(this.auth, JSON.stringify({
                "method": "addGroupMembers",
                "input": {
                    "group_guid": groupId,
				                 "member_guids": usersId
                },
                "client": {
                    "app_name": "Main",
                    "app_version": "3.2.1",
                    "platform": "Web",
                    "package": "web.rubika.ir",
                    "lang_code": "fa"
                }
       }))})
       return decrypt(this.auth, resp.data.data_enc);
       }catch(err){
          throw err
       }
    }
    async getAdmins(groupId){
      try{
      var resp = await axios.post('https://messengerg2c17.iranlms.ir/', {
            "api_version": "5",
            "auth": this.defAuth,
            "data_enc": encrypt(this.auth, JSON.stringify({
                "method": "getGroupAdminMembers",
                "input": {
                    "group_guid": groupId
                },
                "client": {
                    "app_name": "Main",
                    "app_version": "3.2.1",
                    "platform": "Web",
                    "package": "web.rubika.ir",
                    "lang_code": "fa"
                }
       }))})
       return decrypt(this.auth, resp.data.data_enc);
       }catch(err){
          throw err
       }
    }
    async getMessagesById(groupId,messagesId){
      try{
      var resp = await axios.post('https://messengerg2c17.iranlms.ir/', {
            "api_version": "5",
            "auth": this.defAuth,
            "data_enc": encrypt(this.auth, JSON.stringify({
                "method": "getMessagesByID",
                "input": {
                    "object_guid": groupId,
   				              "message_ids": messagesId
                },
                "client": {
                    "app_name": "Main",
                    "app_version": "3.2.1",
                    "platform": "Web",
                    "package": "web.rubika.ir",
                    "lang_code": "fa"
                }
       }))})
       return decrypt(this.auth, resp.data.data_enc);
       }catch(err){
          throw err
       }
    }
    async setUserAccess(groupId,acList){
      try{
      var resp = await axios.post('https://messengerg2c17.iranlms.ir/', {
            "api_version": "5",
            "auth": this.defAuth,
            "data_enc": encrypt(this.auth, JSON.stringify({
                "method": "setGroupDefaultAccess",
                "input": {
                    "access_list": acList,
   				              "group_guid": groupId 
                },
                "client": {
                    "app_name": "Main",
                    "app_version": "3.2.1",
                    "platform": "Web",
                    "package": "web.rubika.ir",
                    "lang_code": "fa"
                }
       }))})
       return decrypt(this.auth, resp.data.data_enc);
       }catch(err){
          throw err
       }
    }
    async getGroupMembers(groupId){
      try{
      var resp = await axios.post('https://messengerg2c17.iranlms.ir/', {
            "api_version": "5",
            "auth": this.defAuth,
            "data_enc": encrypt(this.auth, JSON.stringify({
                "method": "getGroupAllMembers",
                "input": {
   				              "group_guid": groupId 
                },
                "client": {
                    "app_name": "Main",
                    "app_version": "3.2.1",
                    "platform": "Web",
                    "package": "web.rubika.ir",
                    "lang_code": "fa"
                }
       }))})
       return decrypt(this.auth, resp.data.data_enc);
       }catch(err){
          throw err
       }
    }
    async getGroupInfo(groupId){
      try{
      var resp = await axios.post('https://messengerg2c17.iranlms.ir/', {
            "api_version": "5",
            "auth": this.defAuth,
            "data_enc": encrypt(this.auth, JSON.stringify({
                "method": "getGroupInfo",
                "input": {
   				              "group_guid": groupId 
                },
                "client": {
                    "app_name": "Main",
                    "app_version": "3.2.1",
                    "platform": "Web",
                    "package": "web.rubika.ir",
                    "lang_code": "fa"
                }
       }))})
       return decrypt(this.auth, resp.data.data_enc);
       }catch(err){
          throw err
       }
    }
    async getGroupLink(groupId){
      try{
      var resp = await axios.post('https://messengerg2c17.iranlms.ir/', {
            "api_version": "5",
            "auth": this.defAuth,
            "data_enc": encrypt(this.auth, JSON.stringify({
                "method": "getGroupLink",
                "input": {
   				              "group_guid": groupId 
                },
                "client": {
                    "app_name": "Main",
                    "app_version": "3.2.1",
                    "platform": "Web",
                    "package": "web.rubika.ir",
                    "lang_code": "fa"
                }
       }))})
       return decrypt(this.auth, resp.data.data_enc);
       }catch(err){
          throw err
       }
    }
    async getUpdateChats(){
       try{
      var timestamp = Math.floor(Date.now())-200
      var resp = await axios.post('https://messengerg2c17.iranlms.ir/', {
            "api_version": "5",
            "auth": this.defAuth,
            "data_enc": encrypt(this.auth, JSON.stringify({
                "method": "getChatsUpdates",
                "input": {
   				               "state":timestamp.toString()
                },
                "client": {
                    "app_name": "Main",
                    "app_version": "3.2.1",
                    "platform": "Web",
                    "package": "web.rubika.ir",
                    "lang_code": "fa"
                }
       }))})
       return decrypt(this.auth, resp.data.data_enc);
       }catch(err){
          throw err
       }
    }
    async getUpdateChat(groupId){
      try{
      var timestamp = Math.floor(Date.now())-200
      var resp = await axios.post('https://messengerg2c17.iranlms.ir/', {
            "api_version": "5",
            "auth": this.defAuth,
            "data_enc": encrypt(this.auth, JSON.stringify({
                "method": "getMessagesUpdates",
                "input": {
   				               "state":timestamp.toString(),
   				               "object_guid":groupId
                },
                "client": {
                    "app_name": "Main",
                    "app_version": "3.2.1",
                    "platform": "Web",
                    "package": "web.rubika.ir",
                    "lang_code": "fa"
                }
       }))})
       return decrypt(this.auth, resp.data.data_enc);
       }catch(err){
          throw err
       }
    }
    async editMessage(chatId,pymId,newText){
      try{
      var resp = await axios.post('https://messengerg2c17.iranlms.ir/', {
            "api_version": "5",
            "auth": this.defAuth,
            "data_enc": encrypt(this.auth, JSON.stringify({
                "method": "getMessagesInterval",
                "input": {
                    "message_id": pymId,
   				              "object_guid": chatId,
				                 "text": newText
                },
                "client": {
                    "app_name": "Main",
                    "app_version": "3.2.1",
                    "platform": "Web",
                    "package": "web.rubika.ir",
                    "lang_code": "fa"
                }
       }))})
       return decrypt(this.auth, resp.data.data_enc);
       }catch(err){
          throw err
       }
    }
    async cancelRemoveMember(groupId,userId){
      try{
      var resp = await axios.post('https://messengerg2c17.iranlms.ir/', {
            "api_version": "5",
            "auth": this.defAuth,
            "data_enc": encrypt(this.auth, JSON.stringify({
                "method": "banGroupMember",
                "input": {
                    "group_guid":groupId,
   				              "member_guid": userId,
				                 "action":"Unset"
                },
                "client": {
                    "app_name": "Main",
                    "app_version": "3.2.1",
                    "platform": "Web",
                    "package": "web.rubika.ir",
                    "lang_code": "fa"
                }
       }))})
       return decrypt(this.auth, resp.data.data_enc);
       }catch(err){
          throw err
       }
    }
    async addChannelMembers(groupId,usersId){
      try{
      var resp = await axios.post('https://messengerg2c17.iranlms.ir/', {
            "api_version": "5",
            "auth": this.defAuth,
            "data_enc": encrypt(this.auth, JSON.stringify({
                "method": "addChannelMembers",
                "input": {
                    "channel_guid": groupId,
				                 "member_guids": usersId
                },
                "client": {
                    "app_name": "Main",
                    "app_version": "3.2.1",
                    "platform": "Web",
                    "package": "web.rubika.ir",
                    "lang_code": "fa"
                }
       }))})
       return decrypt(this.auth, resp.data.data_enc);
       }catch(err){
          throw err
       }
    }
    async setGroupLink(groupId){
      try{
      var resp = await axios.post('https://messengerg2c17.iranlms.ir/', {
            "api_version": "5",
            "auth": this.defAuth,
            "data_enc": encrypt(this.auth, JSON.stringify({
                "method": "setGroupLink",
                "input": {
   				              "group_guid": groupId 
                },
                "client": {
                    "app_name": "Main",
                    "app_version": "3.2.1",
                    "platform": "Web",
                    "package": "web.rubika.ir",
                    "lang_code": "fa"
                }
       }))})
       return decrypt(this.auth, resp.data.data_enc);
       }catch(err){
          throw err
       }
    }
    async setGroupLink(groupId,slowTime){
      try{
      var resp = await axios.post('https://messengerg2c17.iranlms.ir/', {
            "api_version": "5",
            "auth": this.defAuth,
            "data_enc": encrypt(this.auth, JSON.stringify({
                "method": "editGroupInfo",
                "input": {
   				              "group_guid": groupId,
   				              "slow_mode": slowTime,
				                 "updated_parameters":["slow_mode"]
                },
                "client": {
                    "app_name": "Main",
                    "app_version": "3.2.1",
                    "platform": "Web",
                    "package": "web.rubika.ir",
                    "lang_code": "fa"
                }
       }))})
       return decrypt(this.auth, resp.data.data_enc);
       }catch(err){
          throw err
       }
    }
    async addAdmin(groupId,userId,acList){
      try{
      var resp = await axios.post('https://messengerg2c17.iranlms.ir/', {
            "api_version": "5",
            "auth": this.defAuth,
            "data_enc": encrypt(this.auth, JSON.stringify({
                "method": "setGroupAdmin",
                "input": {
   				              "group_guid": groupId,
   				              "access_list":acList,
				                 "action": "SetAdmin",
				                 "member_guid":userId
                },
                "client": {
                    "app_name": "Main",
                    "app_version": "3.2.1",
                    "platform": "Web",
                    "package": "web.rubika.ir",
                    "lang_code": "fa"
                }
       }))})
       return decrypt(this.auth, resp.data.data_enc);
       }catch(err){
          throw err
       }
    }
    async removeAdmin(groupId,userId){
      try{
      var resp = await axios.post('https://messengerg2c17.iranlms.ir/', {
            "api_version": "5",
            "auth": this.defAuth,
            "data_enc": encrypt(this.auth, JSON.stringify({
                "method": "setGroupAdmin",
                "input": {
   				              "group_guid": groupId,
				                 "action": "UnsetAdmin",
				                 "member_guid":userId
                },
                "client": {
                    "app_name": "Main",
                    "app_version": "3.2.1",
                    "platform": "Web",
                    "package": "web.rubika.ir",
                    "lang_code": "fa"
                }
       }))})
       return decrypt(this.auth, resp.data.data_enc);
       }catch(err){
          throw err
       }
    }
    async pin(groupId,msgId){
      try{
      var resp = await axios.post('https://messengerg2c17.iranlms.ir/', {
            "api_version": "5",
            "auth": this.defAuth,
            "data_enc": encrypt(this.auth, JSON.stringify({
                "method": "setPinMessage",
                "input": {
   				              "object_guid": groupId,
				                 "message_id": msgId,
				                 "action":"Pin"
                },
                "client": {
                    "app_name": "Main",
                    "app_version": "3.2.1",
                    "platform": "Web",
                    "package": "web.rubika.ir",
                    "lang_code": "fa"
                }
       }))})
       return decrypt(this.auth, resp.data.data_enc);
       }catch(err){
          throw err
       }
    }
    async Unpin(groupId,msgId){
      try{
      var resp = await axios.post('https://messengerg2c17.iranlms.ir/', {
            "api_version": "5",
            "auth": this.defAuth,
            "data_enc": encrypt(this.auth, JSON.stringify({
                "method": "setPinMessage",
                "input": {
   				              "object_guid": groupId,
				                 "message_id": msgId,
				                 "action":"Unpin"
                },
                "client": {
                    "app_name": "Main",
                    "app_version": "3.2.1",
                    "platform": "Web",
                    "package": "web.rubika.ir",
                    "lang_code": "fa"
                }
       }))})
       return decrypt(this.auth, resp.data.data_enc);
       }catch(err){
          throw err
       }
    }
}
export { Bot };
