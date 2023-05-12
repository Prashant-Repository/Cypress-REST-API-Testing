// const { it } = require("mocha");

describe('HTTP Requests', () => {
    it('GET Request', () => {
        cy.request('GET','https://jsonplaceholder.typicode.com/posts/').its('status').should('equal',200);
    });

    it('POST Request',()=>{
        cy.request({
            method:'POST',
            url:'https://jsonplaceholder.typicode.com/posts',
            body:{
                title:'sample title',
                body:'sample POST call',
                userId:1
            }
        }).its('status').should('equal',201);
    });

    it('PUT Request',()=>{
        cy.request({
            method:'PUT',
            url:'https://jsonplaceholder.typicode.com/posts/1',
            body:{
                    "title":"sample post",
                    "body":"sample test body",
                    userId:1,
                    id:1
            }
        }).its('status').should('equal', 200)
    });

    it('DELETE Request',()=>{
        cy.request('DELETE','https://jsonplaceholder.typicode.com/posts/1').its('status').should('equal',200);
    });

});