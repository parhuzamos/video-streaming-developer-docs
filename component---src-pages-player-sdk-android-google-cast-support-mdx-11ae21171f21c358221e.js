"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[5397],{63656:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return r},default:function(){return d}});var n=a(63366),o=(a(67294),a(64983)),l=a(55602),i=["components"],r={},s={_frontmatter:r},p=l.Z;function d(e){var t=e.components,a=(0,n.Z)(e,i);return(0,o.kt)(p,Object.assign({},s,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Google Cast support was introduced in version 2.0.0 of the IBM Player SDK as a separate module.\nIt enables casting IBM Live and VoD content to Google Cast enabled devices, such as Chromecast.\nUsers of the encompassing application can watch IBM Video content on a big screen even while their device is in a sleep state."),(0,o.kt)("h2",null,"Providing Cast Integration"),(0,o.kt)("p",null,"Providing Google Cast integration to an application requires two components:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"a ",(0,o.kt)("strong",{parentName:"li"},"Cast Sender"),": a component inside you Android application, running on the mobile device"),(0,o.kt)("li",{parentName:"ul"},"a ",(0,o.kt)("strong",{parentName:"li"},"Cast Receiver"),": a web application running on the Cast enabled device")),(0,o.kt)("p",null,"The Android Player SDK provides an SDK module to cover the ",(0,o.kt)("em",{parentName:"p"},"Sender")," and a new IBM Cast Receiver SDK to cover ",(0,o.kt)("em",{parentName:"p"},"Receiver")," part.\nThe sender component controls the receiver. The receiver component enables you to provide your own Design & UX on the Cast enabled device.\nYou must implement both components."),(0,o.kt)("h3",null,"Prerequisites"),(0,o.kt)("p",null,"You must have a registered Google Cast Developer account at ",(0,o.kt)("a",{parentName:"p",href:"https://cast.google.com/publish"},"https://cast.google.com/publish")," .\nThis is where you will need to setup and later publish your Cast Receiver application.\nIBM Provides the Receiver SDK with which you can easily create your Receiver, and still be able to easily adapt it to your own look and feel."),(0,o.kt)("p",null,"You must also have a place where you can host your Receiver application. This can be a static web server or a CDN server, it is up to you."),(0,o.kt)("p",null,"Using the Google Cast Developer Console you can also register test devices to be used during development.\nThis helps testing your integration before publishing your Cast Receiver to the public.\nYou can find more information on the ",(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/cast/docs/developers"},"Google Cast Developer")," site."),(0,o.kt)("h2",null,"The Sender module"),(0,o.kt)("h3",null,"Importing the module"),(0,o.kt)("p",null,"Adding the SDK module to your application is the same as ","[adding the core module]",",\nafter you’ve done that you only need to add the following to your ",(0,o.kt)("inlineCode",{parentName:"p"},"build.gradle")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-gradle"},"dependencies {\n//  ...\n    implementation 'com.ibm.video.android.player:player-android-plugin-cast-external:2.2.0'\n//  ...\n}\n")),(0,o.kt)("p",null,"Do a gradle sync and the new module will be available."),(0,o.kt)("h3",null,"Playing back content on a Cast Device"),(0,o.kt)("p",null,"Using the Cast Player is much the same as using the local Player, but there are some minor, yet key differences.\nThe Cast Player is ",(0,o.kt)("em",{parentName:"p"},"not")," capable to play back content on your local device. It can only send content to a single cast device and a single content at a time."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Binding your Cast Receiver Application to the SDK module")),(0,o.kt)("p",null,"The Cast module of the SDK needs to be aware of your very own Cast Receiver Application that you’ve created above.\nYou must set your unique ",(0,o.kt)("em",{parentName:"p"},"Cast Application ID")," as a meta-data value in your ",(0,o.kt)("inlineCode",{parentName:"p"},"AndroidManifest.xml"),".\nThis can be done multiple ways — directly in the manifest file or through ",(0,o.kt)("inlineCode",{parentName:"p"},"build.gradle")," —,\nbut the important thing is that you end up with a ",(0,o.kt)("inlineCode",{parentName:"p"},"meta-data")," key: ",(0,o.kt)("inlineCode",{parentName:"p"},"com.ibm.video.android.player.cast.RECEIVER_APP_ID"),"\npointing to your ",(0,o.kt)("em",{parentName:"p"},"Cast Application ID"),"."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<meta-data\n    android:name="com.ibm.video.android.player.cast.RECEIVER_APP_ID"\n    android:value="FF1233ABCDEF"\n/>\n')),(0,o.kt)("p",null,"A detailed example can be found in the provided sample application code."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Making your Activity Cast aware")),(0,o.kt)("p",null,"In order to be able to cast content to a device you need to make your Activity aware of Cast sessions and states.\nFor simplicity we recommend using the built-in ",(0,o.kt)("inlineCode",{parentName:"p"},"CastButtonFactory")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"MediaRouteButton")," of the ",(0,o.kt)("em",{parentName:"p"},"Google Cast SDK"),".\nTo make this work you only need to make two simple steps."),(0,o.kt)("p",null,"Add an entry to your Activity’s ",(0,o.kt)("inlineCode",{parentName:"p"},"menu.xml")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<item\n    android:id="@+id/media_route_menu_item"\n    android:title="Cast"\n    app:actionProviderClass="androidx.mediarouter.app.MediaRouteActionProvider"\n    app:showAsAction="always"\n/>\n')),(0,o.kt)("p",null,"Then create the appropriate Cast button in your Activity’s ",(0,o.kt)("inlineCode",{parentName:"p"},"onCreateOptionsMenu(Menu)")," method:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"@Override\npublic boolean onCreateOptionsMenu(Menu menu) {\n    super.onCreateOptionsMenu(menu);\n    MenuInflater inflater = getMenuInflater();\n    inflater.inflate(R.menu.menu_cast_player_activity, menu);\n\n    CastButtonFactory.setUpMediaRouteButton(getApplicationContext(), menu, R.id.media_route_menu_item);\n    return true;\n}\n")),(0,o.kt)("p",null,"After this whenever a compatible Cast device is in the vicinity a Cast button will appear in your menu.\nThis button can be used to create a ",(0,o.kt)("em",{parentName:"p"},"CastSession")," for which you can initialize a Cast player."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Creating a Cast player")),(0,o.kt)("p",null,"Create a ",(0,o.kt)("inlineCode",{parentName:"p"},"CastPlayerFactory")," in your Activity and pass the Activity’s instance to the constructor:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"private final CastPlayerFactory castPlayerFactory = new CastPlayerFactory(activity);\n")),(0,o.kt)("p",null,"This factory can be used to create or retrieve the IBM Video Streaming Cast Player instance.\nThe Cast Player instance created is essentially a singleton, this factory does not support creating multiple Cast players\ndue to the nature of Google Cast protocol. This is a key difference comparing to the local player."),(0,o.kt)("p",null,"The CastPlayerFactory will give you a ",(0,o.kt)("inlineCode",{parentName:"p"},"com.ibm.video.android.player.api.Player")," class, which is the point where you can interface with the Cast Player. Its methods send\nevents to the Cast Receiver, and its states are observed through the listeners (see below). The ",(0,o.kt)("inlineCode",{parentName:"p"},"Player"),"’s methods are\nexplained further in its ",(0,o.kt)("em",{parentName:"p"},"Javadoc")," and ","[here]","."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Details of using player interface")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"./development-process#step-7:-play-live-or-recorded-content"},"Playing back live or recorded content")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"./development-process#step-8:-handle-player-callbacks"},"Handling Player callbacks")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"./changing-tracks"},"Changing Tracks"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Summary of key differences between local & cast player")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"CastPlayerFactory")," does not need an SDK key, however the Cast Receiver does instead."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"CastPlayerFactory")," needs a ",(0,o.kt)("em",{parentName:"li"},"Cast Application ID")," set in your manifest that uniquely identifies your own Cast Receiver application."),(0,o.kt)("li",{parentName:"ol"},"The created Cast Player instance is effectively singleton, there can always be only one."),(0,o.kt)("li",{parentName:"ol"},"Setting the following does nothing in-case of Cast player",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Player.setPlayerView(PlayerView)")," — The Cast player does not render anything on a local view, only on the Cast device"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Player.setBirthDate(Calendar)")," — This functionality is not implemented for Cast, and it is being removed from local player too."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Player.setLogoClickListener(LogoClickListener)")," — Listener set here is ignored, Cast device does not handle interactivity on its UI."))),(0,o.kt)("li",{parentName:"ol"},"The state transition graph is different for Cast Player than it is for ",(0,o.kt)("a",{parentName:"li",href:"./development-process#state-flow-of-the-player-sdk"},"local player"),".",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Calling ",(0,o.kt)("inlineCode",{parentName:"li"},"Player.connect()")," on a Cast Player will transition it to PAUSED (",(0,o.kt)("inlineCode",{parentName:"li"},"onPaused()"),") state instead of (",(0,o.kt)("inlineCode",{parentName:"li"},"onReady"),")"),(0,o.kt)("li",{parentName:"ul"},"READY (",(0,o.kt)("inlineCode",{parentName:"li"},"onReady"),") state is not (or not always) reported"))),(0,o.kt)("li",{parentName:"ol"},"Cast Player should not be stopped when your activity goes to the background. Let it keep playing on the big-screen. However you still need to detach!")),(0,o.kt)("h3",null,"Using the Cast and local player together"),(0,o.kt)("p",null,"Currently the Cast player can only play back content on a Cast device and the local player can only do so locally on the android device.\nTherefore at this time it is your responsibility to integrate together these two players in your application’s codebase."),(0,o.kt)("p",null,"The simplest way is to create and use your local player as usual, and also listen to an available Cast Session, when it becomes available\ncreate a Cast player and set & attach your listeners there."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"CAUTION"),":\nAlways make sure to stop the local player when transitioning to a Cast device.\nPlaying back content on both at the same time is not only a bad UX but will also ",(0,o.kt)("strong",{parentName:"p"},"count double to your viewer hours"),"!"),(0,o.kt)("p",null,"Use the following high-level guide to implement handover between local and Cast players:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Transitioning to Cast player")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create your local player"),(0,o.kt)("li",{parentName:"ol"},"Set and attach your listeners"),(0,o.kt)("li",{parentName:"ol"},"Register a ",(0,o.kt)("inlineCode",{parentName:"li"},"SessionManagerListener")," to watch for an available ",(0,o.kt)("em",{parentName:"li"},"CastSession"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Acquire the ",(0,o.kt)("inlineCode",{parentName:"li"},"CastContext")),(0,o.kt)("li",{parentName:"ul"},"Add a listener to the ",(0,o.kt)("inlineCode",{parentName:"li"},"CastSessionManager")," in ",(0,o.kt)("inlineCode",{parentName:"li"},"onStart()")," (and remove it in ",(0,o.kt)("inlineCode",{parentName:"li"},"onStop()"),") of your Activity"))),(0,o.kt)("li",{parentName:"ol"},"When a ",(0,o.kt)("em",{parentName:"li"},"CastSession")," becomes available you can start the handover"),(0,o.kt)("li",{parentName:"ol"},"Take note of the progress of local player"),(0,o.kt)("li",{parentName:"ol"},"Detach (",(0,o.kt)("inlineCode",{parentName:"li"},"Player.detach()"),") and stop the local player"),(0,o.kt)("li",{parentName:"ol"},"Create the Cast player using ",(0,o.kt)("inlineCode",{parentName:"li"},"CastPlayerFactory.createPlayer()")),(0,o.kt)("li",{parentName:"ol"},"Initialize the cast player with the same content and use the saved position. ",(0,o.kt)("inlineCode",{parentName:"li"},"Player.initWithContent(contentDescriptor, initialPosition)")),(0,o.kt)("li",{parentName:"ol"},"Set the same listeners to the Cast player and attach them"),(0,o.kt)("li",{parentName:"ol"},"Call ",(0,o.kt)("inlineCode",{parentName:"li"},"Player.play()")," on the Cast player")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Transitioning to local player")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"When the CastSession has ended you will receive a call to ",(0,o.kt)("inlineCode",{parentName:"li"},"onSessionEnded(CastSession, int)")),(0,o.kt)("li",{parentName:"ol"},"Take note of the Cast player’s progress"),(0,o.kt)("li",{parentName:"ol"},"Detach & tear down the Cast player using ",(0,o.kt)("inlineCode",{parentName:"li"},"detach()")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"destroy()")),(0,o.kt)("li",{parentName:"ol"},"Start the local player at the right position",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Either seek the player to the last known position of Cast player"),(0,o.kt)("li",{parentName:"ul"},"Or if it has been destroyed then initialize it with the position and same content ",(0,o.kt)("inlineCode",{parentName:"li"},"Player.initWithContent(contentDescriptor, initialPosition)")))),(0,o.kt)("li",{parentName:"ol"},"Set the same listeners to the local player and attach them"),(0,o.kt)("li",{parentName:"ol"},"Call ",(0,o.kt)("inlineCode",{parentName:"li"},"connect()")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"pause()")," on the local player — recommended UX is to not automatically play content when transitioning back from Cast to local player.")),(0,o.kt)("p",null,"Future versions of the SDK ",(0,o.kt)("em",{parentName:"p"},"might")," provide integrated support to handle Cast & local player together\nand take off the burden of our SDK users."),(0,o.kt)("h2",null,"Cast Player module & IBM Google Cast SDK compatibility"),(0,o.kt)("p",null,"The Android Player SDK’s Google Cast module needs to communicate with the ",(0,o.kt)("a",{parentName:"p",href:"https://developers.video.ibm.com/player-sdk-cast/getting-started"},"IBM Video Streaming Google Cast SDK")," and vice versa.\nThese two software components achieve this by utilizing a shared communication protocol. The versions of this protocol define\nthe compatibility of the two SDKs. If they both support the particular version of the protocol they are compatible and can interact with one another."),(0,o.kt)("p",null,"While we keep close attention to keep the protocol unchanged, sometimes it is unavoidable to do so, and must introduce these breaking changes.\nThe introduction of Regional Cluster support is such example."),(0,o.kt)("p",null,"Whenever the Cast protocol version changes you’ll need to upgrade both the Player SDK and the Google Cast SDK in your ecosystem.\nTo make figuring out compatibility as painless as possible, we will maintain this handy table below to help you figure out which versions of the SDKs can talk to each other."),(0,o.kt)("h3",null,"Compatibility matrix"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Cast protocol \\ SDK Versions"),(0,o.kt)("th",{parentName:"tr",align:null},"IBM Player SDK for Android"),(0,o.kt)("th",{parentName:"tr",align:null},"IBM Google Cast SDK"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Cast protocol v1"),(0,o.kt)("td",{parentName:"tr",align:null},"v2.0.0 - v2.1.0"),(0,o.kt)("td",{parentName:"tr",align:null},"v1.0.0 - v1.1.0")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Cast protocol v2"),(0,o.kt)("td",{parentName:"tr",align:null},"v2.2.0 ->"),(0,o.kt)("td",{parentName:"tr",align:null},"v2.0.0 ->")))),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"All versions are inclusive.")))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-player-sdk-android-google-cast-support-mdx-11ae21171f21c358221e.js.map