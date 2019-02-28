import { Repository } from "../repository/repository";

export const repository = new Repository();

export const getLoaders = async () => {
    return args => {
        return Object.assign({}, repository.getDispatchers(args));
    };
};
