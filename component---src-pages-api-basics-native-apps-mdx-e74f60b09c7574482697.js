"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[332],{16848:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return d},default:function(){return s}});var a,r=n(63366),i=(n(67294),n(64983)),o=n(55602),l=["components"],d={},p=(a="Title",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),c={_frontmatter:d},h=o.Z;function s(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)(h,Object.assign({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",null,"Overview"),(0,i.kt)("p",null,"Native and mobile apps cannot store secrets in a secure way. Consequently, it’s not recommended to use the standard\nauthorization code flow, since it requires a client secret when exchanging the authorization code for an access token\non the token endpoint. By selecting the “Native application” option on the IBM Video Streaming dashboard, PKCE\n(",(0,i.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc7636"},"https://tools.ietf.org/html/rfc7636"),") protocol can be forced to secure the authorization flow. PKCE is a technique for public\nclients to mitigate the threat of having the authorization code intercepted. Clients need to create a secret, then use\nthat secret again when exchanging the authorization code for an access token. This way if the code is intercepted,\nby a malicious application it won’t be able to use it because the token request relies on the initial secret."),(0,i.kt)("h3",null,"Generate a code verifier and code challenge"),(0,i.kt)("p",null,"Apps must generate a unique code verifier for every authorization request. This value must be transformed to a\n",(0,i.kt)("inlineCode",{parentName:"p"},"code_challenge"),", which is sent to the authorization server to obtain the authorization code.\nA ",(0,i.kt)("inlineCode",{parentName:"p"},"code_verifier")," is a high-entropy cryptographic random string using the unreserved characters\n",(0,i.kt)("inlineCode",{parentName:"p"},"[A-Z]")," / ",(0,i.kt)("inlineCode",{parentName:"p"},"[a-z]")," / ",(0,i.kt)("inlineCode",{parentName:"p"},"[0-9]")," / ",(0,i.kt)("inlineCode",{parentName:"p"},"-")," / ",(0,i.kt)("inlineCode",{parentName:"p"},".")," / ",(0,i.kt)("inlineCode",{parentName:"p"},"_")," / ",(0,i.kt)("inlineCode",{parentName:"p"},"~"),", with a minimum length of 43 characters and a maximum length of 128 characters.\nThe code verifier should have enough entropy to make it impractical to guess the value."),(0,i.kt)(p,{mdxType:"Title"},"Supported methods for generating a code challenge"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"METHOD"),(0,i.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"plain")),(0,i.kt)("td",{parentName:"tr",align:null},"The code challenge is the same value as the code verifier generated above. ",(0,i.kt)("inlineCode",{parentName:"td"},"code_challenge")," = ",(0,i.kt)("inlineCode",{parentName:"td"},"code_verifier"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"S256")),(0,i.kt)("td",{parentName:"tr",align:null},"The code challenge is the Base64URL (without padding) encoded SHA256 hash of the code verifier. ",(0,i.kt)("inlineCode",{parentName:"td"},"code_challenge")," = ",(0,i.kt)("inlineCode",{parentName:"td"},"BASE64URL-ENCODE(SHA256(ASCII(code_verifier)))"))))),(0,i.kt)("h3",null,"Send a request to the auth server"),(0,i.kt)("p",null,"To obtain user authorization, send a request to the authorization server at ",(0,i.kt)("a",{parentName:"p",href:"https://authentication.video.ibm.com/authorize"},"https://authentication.video.ibm.com/authorize"),". This endpoint handles active session lookup, authenticates the user, and obtains user consent.\nThe authorization server supports the following additional query string parameters for installed applications:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"PARAMETER"),(0,i.kt)("th",{parentName:"tr",align:null},"IMPORTANCE"),(0,i.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"code_challenge")),(0,i.kt)("td",{parentName:"tr",align:null},"REQUIRED"),(0,i.kt)("td",{parentName:"tr",align:null},"Specifies an encoded ",(0,i.kt)("inlineCode",{parentName:"td"},"code_verifier")," that will be used as a server-side challenge during authorization code exchange")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"code_challenge_method")),(0,i.kt)("td",{parentName:"tr",align:null},"OPTIONAL"),(0,i.kt)("td",{parentName:"tr",align:null},"Defaults to ",(0,i.kt)("inlineCode",{parentName:"td"},"plain"),". Must be used with ",(0,i.kt)("inlineCode",{parentName:"td"},"code_challenge"),". Supported values: ",(0,i.kt)("inlineCode",{parentName:"td"},"plain"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"S256"))))),(0,i.kt)("h3",null,"Exchange authorization code for refresh and access tokens"),(0,i.kt)("p",null,"To exchange an authorization code for an access token, call the token endpoint (",(0,i.kt)("a",{parentName:"p",href:"https://video.ibm.com/oauth2/token"},"https://video.ibm.com/oauth2/token"),") and set the following parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"PARAMETER"),(0,i.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,i.kt)("th",{parentName:"tr",align:null},"IMPORTANCE"),(0,i.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"grant_type")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"REQUIRED"),(0,i.kt)("td",{parentName:"tr",align:null},"MUST be ",(0,i.kt)("inlineCode",{parentName:"td"},"authorization_code")," in this case.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"client_id")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"REQUIRED"),(0,i.kt)("td",{parentName:"tr",align:null},"40-character long string, provided by IBM Video Streaming")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"code")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"REQUIRED"),(0,i.kt)("td",{parentName:"tr",align:null},"The authorization code received from the authorization endpoint")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"code_verifier")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"REQUIRED"),(0,i.kt)("td",{parentName:"tr",align:null},"Code verifier that has been created")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"redirect_uri")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"REQUIRED"),(0,i.kt)("td",{parentName:"tr",align:null},"The redirect URI used by the authorization server to return the authorization response")))),(0,i.kt)("h4",null,"Example"),(0,i.kt)("p",null,"The following is an example with the authorization code flow using PKCE."),(0,i.kt)("p",null,"1 - The client opens a browser with the authorization endpoint:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"https://authentication.video.ibm.com/authorize\n?response_type=code\n&client_id=AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDD\n&redirect_uri=https://example.com/get_auth_code\n&scope=broadcaster\n&state=XYZ\n&code_challenge=bWl6dQ\n&code_challenge_method=S256\n")),(0,i.kt)("p",null,"2 - The user enters his/her credentials and presses the Allow button. The browser is redirected to the following URL:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"http://example.com/get_access_token?code=19d8dbb3ebac55f110c3b526e38bcfdfbf46d659&state=XYZ\n")),(0,i.kt)("p",null,"3 - The page handler at ",(0,i.kt)("a",{parentName:"p",href:"http://example.com/get_access_token"},"http://example.com/get_access_token")," retrieves the Access Token using the Token Endpoint:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"POST /oauth2/token HTTP/1.1\nHost: video.ibm.com\nContent-Type: application/x-www-form-urlencoded\n\ngrant_type=authorization_code&client_id=AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDD&code=19d8dbb3ebac55f110c3b526e38bcfdfbf46d659&redirect_uri=http://example.com/get_access_token&code_verifier=asdf\n")),(0,i.kt)("p",null,"4 - The response of the Token Endpoint contains the access token:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'HTTP/1.1 200 OK\nCache-Control: no-store\nContent-Type:application/json; charset=UTF-8\n\n{"access_token":"ab345cdef123ef1267890abcdef04567890abcd1","refresh_token":"cb345cdef123ef1267890abcdef04567890abcd1","token_type":"bearer", "expires_in":86400}\n')))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-api-basics-native-apps-mdx-e74f60b09c7574482697.js.map