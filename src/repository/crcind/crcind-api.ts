import soap from "soap";
import { ResultSet } from "../models/search-result";
import { MediaTypes, MediaSourceType } from "../models/enums";
export class CRCIndustriesRepository {
    public async searchForPersonas(
        criteria: string
    ): Promise<Array<ResultSet>> {
        try {
            const result: Array<any> = await new Promise(resolve => {
                const url =
                    "http://www.crcind.com/csp/samples/SOAP.Demo.cls?wsdl";
                const args = { name: criteria };
                soap.createClient(url, function(_err, client: any) {
                    client.GetListByName(args, function(
                        _error: any,
                        result: any
                    ) {
                        if (
                            result &&
                            result.GetListByName &&
                            result.PersonIdentification
                        ) {
                            resolve(
                                result.GetListByNameResult.PersonIdentification.map(
                                    (persona: any) => {
                                        return {
                                            name: persona.Name,
                                            source:
                                                MediaSourceType.CRCIndustries,
                                            type: MediaTypes.PERSONA
                                        };
                                    }
                                )
                            );
                        } else {
                            resolve([]);
                        }
                    });
                });
            });
            return Promise.resolve(result);
        } catch {}

        return Promise.resolve([]);
    }
}
