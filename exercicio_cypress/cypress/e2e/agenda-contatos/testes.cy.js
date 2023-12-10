/// <reference types="cypress"/>

describe('Testes para a lista de contatos', () => {
  beforeEach(() => {
    cy.visit('https://agenda-contatos-react.vercel.app/')
  })

  it('Deve renderizar 3 contatos', ()=> {
    cy.get('.contato').should('have.length', 3)
})

  it('Deve adicionar um contato', () => {
    cy.get('[type="text"]').type('Ruan')
    cy.get('[type="email"]').type('ruan@gmail.com')
    cy.get('[type="tel"]').type('9999999999')
    cy.get('.adicionar').click()

    cy.get('.contato').should('have.length', 4)
  })

  it('Deve editar um contato', () => {
    cy.get(':nth-child(2) > .sc-gueYoa > .edit').click()
    cy.get('[type="text"]').clear().type('Lucas')
    cy.get('[type="email"]').clear().type('Lucas@gmail.com')
    cy.get('[type="tel"]').type('1988888888')
    cy.get('.alterar').click()

    cy.get(':nth-child(2) > .sc-dmqHEX > .sc-eDDNvR > :nth-child(1)').should('have.text', 'Lucas')
  })

  it('Deve excluir um contato', () => {
    cy.get(':nth-child(4) > .sc-gueYoa > .delete').click()
        
    cy.get('.contato').should('have.length', 3)
  })
})