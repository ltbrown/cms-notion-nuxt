import { Client } from "@notionhq/client";

// export default async (req, res) => {
//   // secret key
//   const notion = new Client({ auth: process.env.NOTION_API_KEY_FEED });

//   // database id
//   // const database_id = process.env.NOTION_DATABASE_ID_FEED;

//   if (req.method === "POST") {
//     // TODO: handle post request
//   } else {
//     // handle GET
//     const database = await notion.databases.query({
//       database_id: process.env.NOTION_DATABASE_ID_FEED,
//     });

//     const feedData = [];

//     // loop over database results
//     database.results.map((row) => {
//       feedData.push({
//         id: row.id,
//         stall: row.properties.Stall.number,
//         horse: row.properties.Horse.title[0].plain_text,
//         amgrain: row.properties.AMGrain.rich_text[0].plain_text,
//       });
//     });
//   }

//   return {
//     feedData,
//   };
// };

const notion = new Client({ auth: process.env.NOTION_API_KEY_FEED });
const feed_database_id = process.env.NOTION_DATABASE_ID_FEED;

let payload = [];

async function getFeedData() {
  const data = await notion.databases.query({
    database_id: feed_database_id,
  });
  return data;
}

getFeedData().then((data) => {
  payload = data.results;
  // data.results.map((row) => {
  //   payload.push({
  //     id: row.id,
  //     stall: row.properties.Stall.number,
  //     horse: row.properties.Horse.title[0].plain_text,
  //     amgrain: row.properties.AMGrain.rich_text[0].plain_text,
  //     amsupplements: row.properties.AMSupplements.rich_text[0].plain_text,
  //     bp: row.properties.BP.rich_text[0].plain_text,
  //     lc: row.properties.LC.rich_text[0].plain_text,
  //     pmgrain: row.properties.PMGrain.rich_text[0].plain_text,
  //     pmsupplements: row.properties.PMSupplements.rich_text[0].plain_text,
  //   });
  // });
});

// isolate the data table info from the results
function getDataTableInfo(results) {
  let dataTableInfo = [];
  results.forEach((result) => {
    dataTableInfo.push({
      id: result.properties.ID.unique_id.number,
      stall: result.properties.Stall.rich_text[0].plain_text,
      horse: result.properties.Horse.title[0].text.content,
      amgrain: result.properties["AM Grain"].rich_text[0].plain_text,
      pmgrain: result.properties["PM Grain"].rich_text[0].plain_text,
      amsupplements:
        result.properties["AM Supplements"].rich_text[0].plain_text,
      bp: result.properties.BP.rich_text[0].plain_text,
      lc: result.properties.LC.rich_text[0].plain_text,
      pmsupplements:
        result.properties["PM Supplements"].rich_text[0].plain_text,
      tags: result.properties.Tags.multi_select[0].name,
    });
  });
  return dataTableInfo;
}

// function getHorseNames(results) {
//   let horseNames = [];
//   results.forEach((result) => {
//     horseNames.push(result.properties.Horse.title[0].text.content);
//   });
//   return horseNames;
// }

export default defineEventHandler(() => getDataTableInfo(payload));
// export default defineEventHandler(() => payload);

// export default defineEventHandler(() => getHorseNames(payload));
