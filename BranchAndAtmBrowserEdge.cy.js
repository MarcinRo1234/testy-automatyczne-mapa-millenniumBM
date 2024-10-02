/// <reference types ="cypress" />



  
describe("Sprawdzenie mapy", () => {
    it("First step", () => {
        cy.visit('https://www.millenniumbm.pl/pum');
    cy.viewport(1920, 1080);
    cy.get("div#cookie-m-wrapper-n div.cookies-m-buttons a#allow-cookies-m-btn").click();
    cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_JRaq8MoypXpi_");
    })
    it("wybranie miasta", () => {
        cy.visit('https://www.millenniumbm.pl/pum');
    cy.viewport(1920, 1080);
    cy.get("div#cookie-m-wrapper-n div.cookies-m-buttons a#allow-cookies-m-btn").click();
        cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_JRaq8MoypXpi_ div.mds.bm-facilities-map__cities ul.mds.bm-facilities-map__cities__btns li button#FacilitiesMap_cityBtn_warszawa").click();
    })
})
// describe("Mapa test", () => {
//     it.only("Kliknięcie buttona Warszawa", () => {
//         //edge browser
//         let nrTokenaWarszawa = 23422;
//         cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_JRaq8MoypXpi_ div.mds.bm-facilities-map__cities ul.mds.bm-facilities-map__cities__btns li button#FacilitiesMap_cityBtn_warszawa").as("komponentMapa");
//         cy.get("@komponentMapa").first().click();
        
//         // cy.intercept("Get", `https://maps.googleapis.com/maps/api/js/GeocodeService.Search?4sWarszawa&9spl&r_url=https%3A%2F%2Fwww.millenniumbm.pl%2Fpum&callback=_xdc_._u4cpz&key=AIzaSyCSAIXVLyBDOGVmGulHhmgKeix4XcvjO30&token=${nrTokenaWarszawa}`).as("requestWarszawa");
//         // // cy.wait("@requestWarszawa");
//         // cy.get("@requestWarszawa").then(res => {
//         //     console.log(res);
//         //     expect(res.response.statusCode).to.equal(200);
//         //     expect(res.response.url).include("Warszawa");
//         //     expect(res.response.body).include(`"long_name\" : \"Warszawa\",`);
            
            
//         // })
//         cy.get("div#portlet_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_JRaq8MoypXpi div.mds.bm-facilities-map__list.bm-scroll ul li.mds.bm-facility.bm-facility__preview.dir-row").should("have.length", 6);
//         cy.get("div#portlet_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_JRaq8MoypXpi div.mds.bm-facilities-map__list.bm-scroll ul li.mds.bm-facility.bm-facility__preview.dir-row").should("have.length.at.least", 1);
//         cy.get("div#portlet_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_JRaq8MoypXpi div.mds.bm-facilities-map__search-and-filters.bm-scroll [selectedcity]").should("have.attr", "selectedcity", "Warszawa");
        
//     })
    // it("Kliknięcie buttona Kraków", () => {
    //     //edge browser
    //     let nrTokenaKraków = 7043;
    //     cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_JRaq8MoypXpi_ div.mds.bm-facilities-map__cities ul.mds.bm-facilities-map__cities__btns li button").eq(1).click();
    //     cy.intercept("Get", `https://maps.googleapis.com/maps/api/js/GeocodeService.Search?4sKrak%C3%B3w&9spl&r_url=https%3A%2F%2Fwww.millenniumbm.pl%2Fpum&callback=_xdc_._d16ttl&key=AIzaSyCSAIXVLyBDOGVmGulHhmgKeix4XcvjO30&token=${nrTokenaKraków}`).as("requestKraków");
    //     // cy.wait("@requestKraków");
    //     cy.get("@requestKraków").then(res => {
    //         console.log(res);
    //         expect(res.response.statusCode).to.equal(200);
    //         expect(res.response.url).include("Krak%C3%B3w");
    //         expect(res.response.body).include(`"long_name\" : \"Kraków\",`);
            
            
    //     })
    //     cy.get("div#portlet_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_JRaq8MoypXpi div.mds.bm-facilities-map__list.bm-scroll ul li.mds.bm-facility.bm-facility__preview.dir-row").should("have.length", 2);
    //     cy.get("div#portlet_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_JRaq8MoypXpi div.mds.bm-facilities-map__list.bm-scroll ul li.mds.bm-facility.bm-facility__preview.dir-row").should("have.length.at.least", 1);
    //     cy.get("div#portlet_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_JRaq8MoypXpi div.mds.bm-facilities-map__search-and-filters.bm-scroll [selectedcity]").should("have.attr", "selectedcity", "Kraków");
      
    // })
    // // it("Skorzystanie z wyszukiwarki", () => {
    //     let nrTokenaWrocław = 122289;
    //     cy.get("div#portlet_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_JRaq8MoypXpi div.mds.bm-search-input input").as("mapLoading");
        
    //     cy.get("@mapLoading").type("Wrocław {enter}");
    //     cy.intercept("Get", `https://maps.googleapis.com/maps/api/js/GeocodeService.Search?4sWroc%C5%82aw%20&9spl&r_url=https%3A%2F%2Fwww.millenniumbm.pl%2Fpum&callback=_xdc_._8ebnmh&key=AIzaSyCSAIXVLyBDOGVmGulHhmgKeix4XcvjO30&token=${nrTokenaWrocław}`).as("requestWrocław");
    //     cy.get("@requestWrocław").then(res => {
    //         console.log(res);
    //         expect(res.response.statusCode).to.equal(200);
    //         expect(res.response.url).include("Wroc%C5%82aw");
    //         expect(res.response.body).include(`"long_name\" : \"Wrocław\",`);
            
            
    //     })
    //     cy.get("div#portlet_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_JRaq8MoypXpi div.mds.bm-facilities-map__list.bm-scroll ul li.mds.bm-facility.bm-facility__preview.dir-row").should("have.length", 1);


    // it("", () => {
       
    // })   
    