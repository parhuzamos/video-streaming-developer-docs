"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[9279],{60265:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return r},default:function(){return u}});var n=a(63366),o=(a(67294),a(64983)),s=a(55602),i=["components"],r={},l={_frontmatter:r},c=s.Z;function u(e){var t=e.components,a=(0,n.Z)(e,i);return(0,o.kt)(c,Object.assign({},l,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",null,"Introduction"),(0,o.kt)("p",null,"The IBM Video Streaming SDK lets you broadcast live videos in your native applications. Using the native SDK gives you full control over the broadcast process, you can build up your own user interface, define your audio and video input sources, callbacks on status changes, and many more."),(0,o.kt)("p",null,"This document describes the basic steps to make an iOS native app using the IBM Video Streaming SDK."),(0,o.kt)("h2",null,"Before you begin"),(0,o.kt)("h3",null,"Account prerequisites"),(0,o.kt)("p",null,"Before going into details, please note that document assumes the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You have a registered user at ",(0,o.kt)("a",{parentName:"p",href:"http://video.ibm.com/"},"IBM Watson Media")," (or at ",(0,o.kt)("a",{parentName:"p",href:"http://eu.video.ibm.com/"},"IBM WM EU Cluster"),").")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You have a basic understanding how to use the ",(0,o.kt)("a",{parentName:"p",href:"https://developers.video.ibm.com/channel-api-basic-channel-management",title:"IBM Video Streaming Channel API"},"Channel API"),"."))),(0,o.kt)("p",null,"If you have questions, please ",(0,o.kt)("a",{parentName:"p",href:"https://video.ibm.com/enterprise-video/contact"},"contact us"),"."),(0,o.kt)("h3",null,"Development prerequisites"),(0,o.kt)("p",null,"The IBM Video Streaming Broadcaster SDK for iOS requires iOS 12.0 or above.\nWe recommend using the most recent version of Xcode."),(0,o.kt)("h3",null,"Using Regional Clusters"),(0,o.kt)("p",null,"IBM Watson Media hosts an additional Server Cluster in the EU, besides the original world-wide one.\nThese so called regional clusters are completely distinct entities, there’s no data transfer among them. A customer account can only reside in one of them.\nYou can read more about the topic in ",(0,o.kt)("a",{parentName:"p",href:"https://blog.video.ibm.com/streaming-product-updates/server-cluster-in-europe-for-streaming-video/"},"this article"),"."),(0,o.kt)("p",null,"Because of the complete separation of data summarized above, the updated Broadcaster SDK will need to be explicitly supplied with a “regional cluster” parameter.\nGiven this parameter the SDK will know which servers it can access to reach the resources that belong to the desired customer account."),(0,o.kt)("p",null,"Please also note that an SDK access always belongs to a specific IBM WM cluster. If you’d like to access accounts in different clusters,\nyou will need to setup multiple SDK accesses, more specifically “Channel API Access” in case of the Broadcaster SDK for each regional cluster.\nThen you can use these accesses in your application, you can find an example in the supplied sample project."))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-broadcaster-sdk-ios-getting-started-mdx-8f71bf3776e4e363c9fa.js.map