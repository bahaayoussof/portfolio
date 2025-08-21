from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page()

    # iPhone 11 viewport
    page.set_viewport_size({"width": 414, "height": 896})

    page.goto("http://localhost:3000")

    # Home section
    page.screenshot(path="jules-scratch/verification/mobile_homepage.png")

    # About section
    about_section = page.locator("#about")
    about_section.scroll_into_view_if_needed()
    page.wait_for_timeout(1000)
    page.screenshot(path="jules-scratch/verification/mobile_about_section.png")

    # Work section
    work_section = page.locator("#work")
    work_section.scroll_into_view_if_needed()
    page.wait_for_timeout(1000)
    page.screenshot(path="jules-scratch/verification/mobile_work_section.png")

    # Skills section
    skills_section = page.locator("#skills")
    skills_section.scroll_into_view_if_needed()
    page.wait_for_timeout(1000)
    page.screenshot(path="jules-scratch/verification/mobile_skills_section.png")

    # Contact section
    contact_section = page.locator("#contact")
    contact_section.scroll_into_view_if_needed()
    page.wait_for_timeout(1000)
    page.screenshot(path="jules-scratch/verification/mobile_contact_section.png")

    browser.close()
