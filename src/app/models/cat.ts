export interface Cat {

    id : string;
    name : string;
    wikipedia_url: string;
    vetstreet_url: string
    reference_image_id : string;
    description: string;
    origin: string;
    temperament: string;
    weight : {
        metric: string;
    };
    img_src : string;

}
