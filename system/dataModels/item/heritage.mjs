import TraitDataModel from "../trait.mjs";

export default class HeritageTypeDataModel extends foundry.abstract.TypeDataModel {

    /** @inheritDoc */
    static defineSchema() {
        const fields = foundry.data.fields;
        return {
            description: new fields.HTMLField(),
            traits: new fields.ArrayField(new fields.EmbeddedDataField(TraitDataModel), {default: []}),
        }
    }
}