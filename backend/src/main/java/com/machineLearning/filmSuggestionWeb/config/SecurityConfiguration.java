package com.machineLearning.filmSuggestionWeb.config;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableMethodSecurity(securedEnabled = true)
public class SecurityConfiguration {
    @Bean
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http, CustomAuthenticationEntryPoint customAuthenticationEntryPoint) throws Exception {


        http
                .csrf(c -> c.disable())
                .authorizeHttpRequests(
                        authz -> authz
                                .requestMatchers("/","api/v1/auth/login","/api/v1/auth/register"
                                        ,"api/v1/auth/account","api/v1/auth/refresh","/v3/api-docs/**",
                                        "/swagger-ui/**",
                                        "/swagger-ui.html").permitAll()
                                .requestMatchers("api/v1/users").hasAnyRole("ADMIN")
                                .requestMatchers("api/v1/roles").hasAnyRole("ADMIN")
                                .requestMatchers("api/v1/suggestions").hasAnyRole("ADMIN","USER")
                                //.requestMatchers(HttpMethod.GET,"api/v1/users").hasAnyRole("ADMIN")
                                //.requestMatchers(HttpMethod.GET,"api/v1/roles").hasAnyRole("ADMIN")
                                .anyRequest().authenticated())
                .cors(Customizer.withDefaults())
                .oauth2ResourceServer((oauth2) -> oauth2.jwt(Customizer.withDefaults())
                        .authenticationEntryPoint(customAuthenticationEntryPoint))
//                .exceptionHandling(exceptions ->
//                        exceptions.authenticationEntryPoint( new BearerTokenAuthenticationEntryPoint()) //401
//                                  .accessDeniedHandler(new BearerTokenAccessDeniedHandler())) //403
                .formLogin(f -> f.disable())
                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS));
        return http.build();
    }


}
