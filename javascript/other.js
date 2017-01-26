//隐藏四位手机号
function hideTelephone(telephone) {
		if( !telephone ) {
			return "";
		}

		if( telephone.length != 11){
			return telephone;
		}

		return telephone.substr(0, 4) + "****" + telephone.substr(8, 11);
}
/* ---- */
hideTelephone("13003334444");
