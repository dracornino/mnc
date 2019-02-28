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
                                result.GetListByName &&
                                result.PersonIdentification) {
                                resolve(result.GetListByNameResult.PersonIdentification.map((persona) => {
                                    return {
                                        name: persona.Name,
                                        source: enums_1.MediaSourceType.CRCIndustries,
                                        type: enums_1.MediaTypes.PERSONA
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JjaW5kLWFwaS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNyY2luZC1hcGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLGdEQUF3QjtBQUV4QiwyQ0FBOEQ7QUFDOUQsTUFBYSx1QkFBdUI7SUFDbkIsaUJBQWlCLENBQzFCLFFBQWdCOztZQUVoQixJQUFJO2dCQUNBLE1BQU0sTUFBTSxHQUFlLE1BQU0sSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7b0JBQ25ELE1BQU0sR0FBRyxHQUNMLHNEQUFzRCxDQUFDO29CQUMzRCxNQUFNLElBQUksR0FBRyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsQ0FBQztvQkFDaEMsY0FBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsVUFBUyxJQUFJLEVBQUUsTUFBVzt3QkFDN0MsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsVUFDdkIsTUFBVyxFQUNYLE1BQVc7NEJBRVgsSUFDSSxNQUFNO2dDQUNOLE1BQU0sQ0FBQyxhQUFhO2dDQUNwQixNQUFNLENBQUMsb0JBQW9CLEVBQzdCO2dDQUNFLE9BQU8sQ0FDSCxNQUFNLENBQUMsbUJBQW1CLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUMvQyxDQUFDLE9BQVksRUFBRSxFQUFFO29DQUNiLE9BQU87d0NBQ0gsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJO3dDQUNsQixNQUFNLEVBQ0YsdUJBQWUsQ0FBQyxhQUFhO3dDQUNqQyxJQUFJLEVBQUUsa0JBQVUsQ0FBQyxPQUFPO3FDQUMzQixDQUFDO2dDQUNOLENBQUMsQ0FDSixDQUNKLENBQUM7NkJBQ0w7aUNBQU07Z0NBQ0gsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDOzZCQUNmO3dCQUNMLENBQUMsQ0FBQyxDQUFDO29CQUNQLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUMsQ0FBQyxDQUFDO2dCQUNILE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUNsQztZQUFDLFdBQU0sR0FBRTtZQUVWLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMvQixDQUFDO0tBQUE7Q0FDSjtBQTFDRCwwREEwQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc29hcCBmcm9tIFwic29hcFwiO1xyXG5pbXBvcnQgeyBSZXN1bHRTZXQgfSBmcm9tIFwiLi4vbW9kZWxzL3NlYXJjaC1yZXN1bHRcIjtcclxuaW1wb3J0IHsgTWVkaWFUeXBlcywgTWVkaWFTb3VyY2VUeXBlIH0gZnJvbSBcIi4uL21vZGVscy9lbnVtc1wiO1xyXG5leHBvcnQgY2xhc3MgQ1JDSW5kdXN0cmllc1JlcG9zaXRvcnkge1xyXG4gICAgcHVibGljIGFzeW5jIHNlYXJjaEZvclBlcnNvbmFzKFxyXG4gICAgICAgIGNyaXRlcmlhOiBzdHJpbmdcclxuICAgICk6IFByb21pc2U8QXJyYXk8UmVzdWx0U2V0Pj4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdDogQXJyYXk8YW55PiA9IGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdXJsID1cclxuICAgICAgICAgICAgICAgICAgICBcImh0dHA6Ly93d3cuY3JjaW5kLmNvbS9jc3Avc2FtcGxlcy9TT0FQLkRlbW8uY2xzP3dzZGxcIjtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFyZ3MgPSB7IG5hbWU6IGNyaXRlcmlhIH07XHJcbiAgICAgICAgICAgICAgICBzb2FwLmNyZWF0ZUNsaWVudCh1cmwsIGZ1bmN0aW9uKF9lcnIsIGNsaWVudDogYW55KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xpZW50LkdldExpc3RCeU5hbWUoYXJncywgZnVuY3Rpb24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9lcnJvcjogYW55LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQ6IGFueVxyXG4gICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5HZXRMaXN0QnlOYW1lICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuUGVyc29uSWRlbnRpZmljYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5HZXRMaXN0QnlOYW1lUmVzdWx0LlBlcnNvbklkZW50aWZpY2F0aW9uLm1hcChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHBlcnNvbmE6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBwZXJzb25hLk5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNZWRpYVNvdXJjZVR5cGUuQ1JDSW5kdXN0cmllcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBNZWRpYVR5cGVzLlBFUlNPTkFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShbXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXN1bHQpO1xyXG4gICAgICAgIH0gY2F0Y2gge31cclxuXHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShbXSk7XHJcbiAgICB9XHJcbn1cclxuIl19