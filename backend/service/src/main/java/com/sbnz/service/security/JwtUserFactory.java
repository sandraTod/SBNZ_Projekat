package com.sbnz.service.security;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import com.sbnz.model.User;
import com.sbnz.model.UserType;

import java.util.ArrayList;
import java.util.List;

public final class JwtUserFactory {

	private JwtUserFactory() {
	}

	public static JwtUser create(User user) {
		return new JwtUser(user.getId(), user.getUsername(), user.getPassword(),
				mapToGrantedAuthorities(user.getRole()), true);
	}

	private static List<GrantedAuthority> mapToGrantedAuthorities(UserType userType) {
		List<GrantedAuthority> retVal = new ArrayList<>();
		retVal.add(new SimpleGrantedAuthority(userType.toString()));
		return retVal;
	}
}
