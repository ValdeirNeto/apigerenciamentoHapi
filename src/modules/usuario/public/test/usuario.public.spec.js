/* global describe,  before, it, expect, server */


describe('Usuario', () => {
  describe('Consulta', () => {

    it('Deve retornar uma listagem de usuario', async () => {
      const response = await server.inject({
        method: 'GET',
        url: '/v1/usuario'
      });

      expect(response.statusCode).to.equals(200);
      expect(response.result).to.exist();
      expect(response.result.rows).to.exist();
    })
  })
})

