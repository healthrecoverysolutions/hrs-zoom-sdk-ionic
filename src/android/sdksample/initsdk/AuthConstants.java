package cordova.plugin.zoom.Zoom.sdksample.initsdk;

public interface AuthConstants {

	// TODO Change it to your web domain
	public final static String WEB_DOMAIN = "zoom.us";

	/**
	 * We recommend that, you can generate jwttoken on your own server instead of hardcore in the code.
	 * We hardcore it here, just to run the demo.
	 *
	 * You can generate a jwttoken on the https://jwt.io/
	 * with this payload:
	 * {
	 *
	 *     "appKey": "string", // app key
	 *     "iat": long, // access token issue timestamp
	 *     "exp": long, // access token expire time
	 *     "tokenExp": long // token expire time
	 * }
	 */
	public final static String SDK_JWTTOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzZGtLZXkiOiI3R2p4UWV0WXJBM3RRTWJPaVJyQUl4WTNVc1puM3d1U08xb3oiLCJtbiI6ODczNTk3MzU4NTcsInJvbGUiOjAsImlhdCI6MTY5NzQ4MTAzMSwiZXhwIjoxNjk3NDg4MjMxLCJhcHBLZXkiOiI3R2p4UWV0WXJBM3RRTWJPaVJyQUl4WTNVc1puM3d1U08xb3oiLCJ0b2tlbkV4cCI6MTY5NzQ4ODIzMX0.cZ9NkrQWIWkg68rR9lvCPzO8sB1mv8sFPj3QZOUpeAQ";

}
