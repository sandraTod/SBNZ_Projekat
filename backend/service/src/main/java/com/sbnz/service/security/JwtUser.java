package com.sbnz.service.security;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;

public class JwtUser implements UserDetails {

	private static final long serialVersionUID = 1L;
	private final Long id;
	private final String password;
	private final String email;
	private final Collection<? extends GrantedAuthority> authorities;
	private final boolean enabled;

	public JwtUser(Long id, String email, String password,
			Collection<? extends GrantedAuthority> authorities, boolean enabled) {
		this.id = id;
		this.email = email;
		this.password = password;
		this.authorities = authorities;
		this.enabled = enabled;
	}

	@JsonIgnore
	public Long getId() {
		return id;
	}

	@JsonIgnore
	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@JsonIgnore
	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@JsonIgnore
	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	public String getEmail() {
		return email;
	}

	@JsonIgnore
	@Override
	public String getPassword() {
		return password;
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return authorities;
	}

	@Override
	public boolean isEnabled() {
		return enabled;
	}

	@Override
	public String getUsername() {

		return email;
	}
}
