import { TestIdsType } from "typing"

export const buildTestIds = (id: string): TestIdsType => {
    if (typeof id !== "string") {
        throw new Error("buildTestIds: Id must be a string");
    }
    return {
        "data-cy": id,
        "data-testid": id,
    };

}