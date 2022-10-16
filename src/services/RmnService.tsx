import http from "../apiRequests";
import RmnEtagesData from "../types/RmnEtages";
import RmnFacturesData from "../types/RmnFactures";

const getAll = () => {
  return http.get<Array<RmnEtagesData>>("");
};

const get = (data: RmnEtagesData) => {
  return http.post<RmnEtagesData>("",data);
};

const create = (data: RmnFacturesData) => {
  return http.post<RmnFacturesData>("/facture", [data]);
};

const update = (id: any, data: RmnEtagesData) => {
  return http.put<any>(`/etages/${id}`, data);
};

const remove = (id: any) => {
  return http.delete<any>(`/facture/${id}`);
};

const removeAll = () => {
  return http.delete<any>(`/factures`);
};

const findByTitle = (id: string) => {
  return http.get<Array<RmnFacturesData>>(`/factures?title=${id}`);
};

const RmnService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle,
};

export default RmnService;