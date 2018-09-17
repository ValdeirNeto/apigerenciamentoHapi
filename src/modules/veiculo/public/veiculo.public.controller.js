'use strict';


async function list (request, replay) {
  const { Veiculo } = request.database;
  return await Veiculo.findAndCountAll();
}

async function get (request, replay) {
  const { Veiculo } = request.database;
  const _veiculo =  await Veiculo.findById(request.params.id);
  if(!_veiculo) return replay.badRequest('Veiculo nao localizado');
  return _veiculo;
}

async function create (request, replay) {
  const { Veiculo } = request.database;
  const _veiculo = new Veiculo(request.payload);
  return await _veiculo.save();
}

async function update (request, replay) {
  const { Veiculo } = request.database;
  const _veiculo = await Veiculo.findById(request.params.id);
  if(!_veiculo) return replay.badRequest('Veiculo nao localizado');
  await _veiculo.update(request.payload);
  return _veiculo;
}

async function remove (request, replay) {
  const { Veiculo } = request.database;
  const _veiculo = await Veiculo.destroy( { where: { id: request.params.id } }) ;
  if(!_veiculo) return replay.badRequest('Veiculo nao localizado');
  return _veiculo;
}

module.exports = {
  list,
  get,
  create,
  update,
  remove
};