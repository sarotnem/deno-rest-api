import nanoid from "https://deno.land/x/nanoid/mod.ts";
import { Songs } from "../models/Songs.ts";
import { Song } from "../types/Song.ts";

export const index = ({ response }: { response: any }) => {
  response.status = 200
  response.body = {
    success: true,
    data: Songs,
  };
};

export const show = ({
  params,
  response,
}: {
  params: { id: string };
  response: any;
}) => {
  const song: Song | undefined = Songs.find((item) => item.id === params.id);

  if (song) {
    response.status = 200;
    response.body = {
      success: true,
      data: song,
    };
  } else {
    response.status = 404;
    response.body = {
      success: false,
      message: "The requested song has not been found",
    };
  }
};

export const store = async ({
  request,
  response,
}: {
  request: any;
  response: any;
}) => {
  const body = await request.body();

  if (request.hasBody) {
    const song: Song = body.value;
    song.id = nanoid();
    Songs.push(song);
    response.status = 201;
    response.body = {
      success: true,
      data: song,
    };
  } else {
    response.status = 400;
    response.body = {
      success: false,
      message: "Bad Request (No Data)",
    };
  }
};

export const update = async ({
  params,
  request,
  response,
}: {
  params: { id: string };
  request: any;
  response: any;
}) => {
  const song: Song | undefined = Songs.find((item) => item.id === params.id);

  if (song) {
    const body = await request.body();

    const updatedSong: { title?: string; artist?: string } = body.value;

    const newSongs = Songs.map((item: Song) =>
      item.id === params.id ? { ...item, ...updatedSong } : item
    );

    Songs.splice(0, Songs.length)
    Songs.push(...newSongs)

    response.status = 200;
    response.body = {
      success: true,
      data: updatedSong,
    };
  } else {
    response.status = 404;
    response.body = {
      success: false,
      message: "The requested song has not been found",
    };
  }
};

export const destroy = ({
  params,
  response,
}: {
  params: { id: string };
  response: any;
}) => {
  const song: Song | undefined = Songs.find((item) => item.id === params.id);

  if (song) {
      const newSongs = Songs.filter(item => item.id !== params.id)

      Songs.splice(0, Songs.length)
      Songs.push(...newSongs)
      response.status = 200
      response.body = {
          success: true,
          data: song
      }
  } else {
      response.status = 404
      response.body = {
          success: false,
          message: "The requested song has not been found"
      }
  }
};
