package org.kamranzafar.samples.spring.mvc;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @author kamran
 * 
 */
@Controller
public class HomeController {
	@RequestMapping("/")
	public String home(ModelMap modelMap) {
		modelMap.addAttribute("name", "Kamran");
		return "home";
	}
}
