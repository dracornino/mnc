"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const soap_1 = __importDefault(require("soap"));
const enums_1 = require("../models/enums");
class CRCIndustriesRepository {
    searchForPersonas(criteria) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield new Promise(resolve => {
                    const url = "http://www.crcind.com/csp/samples/SOAP.Demo.cls?wsdl";
                    const args = { name: criteria };
                    soap_1.default.createClient(url, function (_err, client) {
                        client.GetListByName(args, function (_error, result) {
                            if (result &&
                                result.GetListByNameResult &&
                                result.GetListByNameResult.PersonIdentification) {
                                resolve(result.GetListByNameResult.PersonIdentification.map((persona) => {
                                    return {
                                        name: persona.Name,
                                        source: enums_1.MediaSourceType.CRCIndustries,
                                        type: enums_1.MediaTypes.PERSONA,
                                        url: `http://www.crcind.com/csp/samples/SOAP.Demo.cls?soap_method=FindPerson&id=${persona.ID}`
                                    };
                                }));
                            }
                            else {
                                resolve([]);
                            }
                        });
                    });
                });
                return Promise.resolve(result);
            }
            catch (_a) { }
            return Promise.resolve([]);
        });
    }
}
exports.CRCIndustriesRepository = CRCIndustriesRepository;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JjaW5kLWFwaS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNyY2luZC1hcGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLGdEQUF3QjtBQUV4QiwyQ0FBOEQ7QUFDOUQsTUFBYSx1QkFBdUI7SUFDbkIsaUJBQWlCLENBQzFCLFFBQWdCOztZQUVoQixJQUFJO2dCQUNBLE1BQU0sTUFBTSxHQUFRLE1BQU0sSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7b0JBQzVDLE1BQU0sR0FBRyxHQUNMLHNEQUFzRCxDQUFDO29CQUMzRCxNQUFNLElBQUksR0FBRyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsQ0FBQztvQkFDaEMsY0FBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsVUFBUyxJQUFJLEVBQUUsTUFBVzt3QkFDN0MsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsVUFDdkIsTUFBVyxFQUNYLE1BQVc7NEJBRVgsSUFDSSxNQUFNO2dDQUNOLE1BQU0sQ0FBQyxtQkFBbUI7Z0NBQzFCLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxvQkFBb0IsRUFDakQ7Z0NBQ0UsT0FBTyxDQUNILE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQy9DLENBQUMsT0FBWSxFQUFFLEVBQUU7b0NBQ2IsT0FBTzt3Q0FDSCxJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUk7d0NBQ2xCLE1BQU0sRUFDRix1QkFBZSxDQUFDLGFBQWE7d0NBQ2pDLElBQUksRUFBRSxrQkFBVSxDQUFDLE9BQU87d0NBQ3hCLEdBQUcsRUFBRSw2RUFDRCxPQUFPLENBQUMsRUFDWixFQUFFO3FDQUNMLENBQUM7Z0NBQ04sQ0FBQyxDQUNKLENBQ0osQ0FBQzs2QkFDTDtpQ0FBTTtnQ0FDSCxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7NkJBQ2Y7d0JBQ0wsQ0FBQyxDQUFDLENBQUM7b0JBQ1AsQ0FBQyxDQUFDLENBQUM7Z0JBQ1AsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ2xDO1lBQUMsV0FBTSxHQUFFO1lBRVYsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQy9CLENBQUM7S0FBQTtDQUNKO0FBN0NELDBEQTZDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzb2FwIGZyb20gXCJzb2FwXCI7XHJcbmltcG9ydCB7IFJlc3VsdFNldCB9IGZyb20gXCIuLi9tb2RlbHMvc2VhcmNoLXJlc3VsdFwiO1xyXG5pbXBvcnQgeyBNZWRpYVR5cGVzLCBNZWRpYVNvdXJjZVR5cGUgfSBmcm9tIFwiLi4vbW9kZWxzL2VudW1zXCI7XHJcbmV4cG9ydCBjbGFzcyBDUkNJbmR1c3RyaWVzUmVwb3NpdG9yeSB7XHJcbiAgICBwdWJsaWMgYXN5bmMgc2VhcmNoRm9yUGVyc29uYXMoXHJcbiAgICAgICAgY3JpdGVyaWE6IHN0cmluZ1xyXG4gICAgKTogUHJvbWlzZTxBcnJheTxSZXN1bHRTZXQ+PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0OiBhbnkgPSBhd2FpdCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9XHJcbiAgICAgICAgICAgICAgICAgICAgXCJodHRwOi8vd3d3LmNyY2luZC5jb20vY3NwL3NhbXBsZXMvU09BUC5EZW1vLmNscz93c2RsXCI7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhcmdzID0geyBuYW1lOiBjcml0ZXJpYSB9O1xyXG4gICAgICAgICAgICAgICAgc29hcC5jcmVhdGVDbGllbnQodXJsLCBmdW5jdGlvbihfZXJyLCBjbGllbnQ6IGFueSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsaWVudC5HZXRMaXN0QnlOYW1lKGFyZ3MsIGZ1bmN0aW9uKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfZXJyb3I6IGFueSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiBhbnlcclxuICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuR2V0TGlzdEJ5TmFtZVJlc3VsdCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LkdldExpc3RCeU5hbWVSZXN1bHQuUGVyc29uSWRlbnRpZmljYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5HZXRMaXN0QnlOYW1lUmVzdWx0LlBlcnNvbklkZW50aWZpY2F0aW9uLm1hcChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHBlcnNvbmE6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBwZXJzb25hLk5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNZWRpYVNvdXJjZVR5cGUuQ1JDSW5kdXN0cmllcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBNZWRpYVR5cGVzLlBFUlNPTkEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBgaHR0cDovL3d3dy5jcmNpbmQuY29tL2NzcC9zYW1wbGVzL1NPQVAuRGVtby5jbHM/c29hcF9tZXRob2Q9RmluZFBlcnNvbiZpZD0ke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZXJzb25hLklEXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShbXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXN1bHQpO1xyXG4gICAgICAgIH0gY2F0Y2gge31cclxuXHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShbXSk7XHJcbiAgICB9XHJcbn1cclxuIl19