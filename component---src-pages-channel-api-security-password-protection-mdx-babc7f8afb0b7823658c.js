"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[5333],{69312:function(t,e,n){n.r(e),n.d(e,{_frontmatter:function(){return s},default:function(){return u}});var a,r=n(63366),l=(n(67294),n(64983)),o=n(55602),p=["components"],s={},i=(a="InlineNotification",function(t){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",t)}),d={_frontmatter:s},k=o.Z;function u(t){var e=t.components,n=(0,r.Z)(t,p);return(0,l.kt)(k,Object.assign({},d,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"When password protection is enabled, viewers must enter a password to view live stream or on demand video content."),(0,l.kt)(i,{kind:"warning",mdxType:"InlineNotification"},"This feature is currently disabled in both the iOS and Android apps."),(0,l.kt)("h2",null,"Get status of password protection"),(0,l.kt)("p",null,"Check the password protection status of the channel."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"GET https://api.video.ibm.com/channels/{channel_id}/locks/password.json\n")),(0,l.kt)("h3",null,"Parameters"),(0,l.kt)("p",null,"This request has no parameters."),(0,l.kt)("h3",null,"Success response"),(0,l.kt)("p",null,"Upon success a response with HTTP status “200 OK” is returned with the following key-value structure."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"KEY"),(0,l.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"enabled")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Password protection status")))),(0,l.kt)("h3",null,"Error responses"),(0,l.kt)("p",null,"Possible error responses:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"HTTP RESPONSE CODE"),(0,l.kt)("th",{parentName:"tr",align:null},"ERROR VALUE"),(0,l.kt)("th",{parentName:"tr",align:null},"ERROR CONDITIONS"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"403 Forbidden"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"lack_of_ownership")),(0,l.kt)("td",{parentName:"tr",align:null},"The API user is not allowed to manage the given channel")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"404 Not Found"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"not_found")),(0,l.kt)("td",{parentName:"tr",align:null},"Channel not found")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"503 Service Unavailable"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"There is a temporary error on the server which makes it impossible to serve the request")))),(0,l.kt)("h2",null,"Set password and enable protection"),(0,l.kt)("p",null,"Set the channel password and enable password protection."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"PUT https://api.video.ibm.com/channels/{channel_id}/locks/password.json\n")),(0,l.kt)("h3",null,"Parameters"),(0,l.kt)("p",null,"The parameters for the PUT request:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:null},"IMPORTANCE"),(0,l.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"password")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"REQUIRED"),(0,l.kt)("td",{parentName:"tr",align:null},"The new channel password")))),(0,l.kt)("h3",null,"Success response"),(0,l.kt)("p",null,"Upon success, a response with HTTP status “201 Created” is returned."),(0,l.kt)("h3",null,"Error responses"),(0,l.kt)("p",null,"Possible error responses:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"HTTP RESPONSE CODE"),(0,l.kt)("th",{parentName:"tr",align:null},"ERROR VALUE"),(0,l.kt)("th",{parentName:"tr",align:null},"ERROR CONDITIONS"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"400 Bad Request"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"input_validation_error")),(0,l.kt)("td",{parentName:"tr",align:null},"The given password is invalid.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"403 Forbidden"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"lack_of_ownership")),(0,l.kt)("td",{parentName:"tr",align:null},"The API user is not allowed to manage the given channel")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"404 Not Found"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"not_found")),(0,l.kt)("td",{parentName:"tr",align:null},"Channel not found")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"503 Service Unavailable"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"There is a temporary error on the server which makes it impossible to serve the request")))),(0,l.kt)("h2",null,"Remove password protection"),(0,l.kt)("p",null,"Remove the password and disable password protection on the channel."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"DELETE https://api.video.ibm.com/channels/{channel_id}/locks/password.json\n")),(0,l.kt)("h3",null,"Parameters"),(0,l.kt)("p",null,"This request has no parameters."),(0,l.kt)("h3",null,"Success response"),(0,l.kt)("p",null,"For this request an empty response is returned."),(0,l.kt)("h3",null,"Error responses"),(0,l.kt)("p",null,"Possible error responses:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"HTTP RESPONSE CODE"),(0,l.kt)("th",{parentName:"tr",align:null},"ERROR VALUE"),(0,l.kt)("th",{parentName:"tr",align:null},"ERROR CONDITIONS"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"403 Forbidden"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"lack_of_ownership")),(0,l.kt)("td",{parentName:"tr",align:null},"The API user is not allowed to manage the given channel")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"404 Not Found"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"not_found")),(0,l.kt)("td",{parentName:"tr",align:null},"Channel not found")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"503 Service Unavailable"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"There is a temporary error on the server which makes it impossible to serve the request")))))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-channel-api-security-password-protection-mdx-babc7f8afb0b7823658c.js.map