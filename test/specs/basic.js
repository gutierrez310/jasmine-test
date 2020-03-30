describe('demo.asteriag.com landing page', () => {
	it('Title validation', () =>{
	    browser.url('http://demo.asteriag.com');
	    const title = browser.getTitle();
	    expect(title).toBe('Asteria Bank – We Test For Better Software');
    })
})
