package org.kamranzafar.samples.spring.mvc.rest;

import org.kamranzafar.samples.spring.mvc.User;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * @author kamran
 * 
 */
@Controller
@RequestMapping("rest")
public class UserResource {
	@RequestMapping("user")
	@ResponseBody
	public User getUserDetails(ModelMap modelMap) {
		String username = ((org.springframework.security.core.userdetails.User) SecurityContextHolder.getContext()
				.getAuthentication().getPrincipal()).getUsername();

		User user = new User();
		user.setUsername(username);

		return user;
	}
}
