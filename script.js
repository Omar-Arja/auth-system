const pages = {}

pages.base_url = "http://localhost/auth-system/";

pages.page_index = () => {
    const index_url = pages.base_url + "articles.php"
    console.log("Hello from index page")
}

pages.page_register = () => {
    const register_url = pages.base_url + "register.php"
    console.log("Hello from register page")
}

pages.page_landing = () => {
    console.log("Hello from landing page")
}

pages.loadFor = (page) => {
    eval("pages.page_" + page + "();")
}