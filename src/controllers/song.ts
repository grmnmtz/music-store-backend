import { Request, Response } from 'express'

import {
  createSong,
  deleteSong,
  getAllSongs,
  getSongById,
  updateSong,
  getAllSongsByGenreId,
  getAllSongsByArtistId,
  getAllSongsByAlbumId,
  getSongByAlbumAndSongId,
} from '../usecases/song'

export const handleGetSongs = async (req: Request, res: Response) => {
  try {
    const songs = await getAllSongs()
    res.send({ response: songs })
  } catch (e) {
    console.error(e)
  }
}

export const handleGetSongsByGenre = async (req: Request, res: Response) => {
  try {
    const { genreId } = req.params
    const songs = await getAllSongsByGenreId(genreId)
    res.send({ response: songs })
  } catch (e) {
    console.error(e)
  }
}

export const handleGetSongsByAlbum = async (req: Request, res: Response) => {
  try {
    const { albumId } = req.params

    const songs = await getAllSongsByAlbumId(albumId)
    res.send({ response: songs })
  } catch (e) {
    console.error(e)
  }
}

export const handleGetSongsByArtist = async (req: Request, res: Response) => {
  try {
    const { artistId } = req.params

    const songs = await getAllSongsByArtistId(artistId)
    res.send({ response: songs })
  } catch (e) {
    console.error(e)
  }
}

export const handleGetSong = async (req: Request, res: Response) => {
  try {
    const { songId } = req.params
    const song = await getSongById(songId)
    res.send({ response: song })
  } catch (e) {
    console.error(e)
  }
}

export const handleGetSongByAlbumAndSongId = async (
  req: Request,
  res: Response
) => {
  try {
    const { albumId, songId } = req.params
    const song = await getSongByAlbumAndSongId(albumId, songId)
    res.send({ response: song })
  } catch (e) {
    console.error(e)
  }
}

export const handleSongCreate = async (req: Request, res: Response) => {
  try {
    const body = req.body
    const song = await createSong(body)
    res.send({ status: 200, response: song })
  } catch (e) {
    console.error(e)
  }
}

export const handleSongUpdate = async (req: Request, res: Response) => {
  try {
    const { songId } = req.params
    const body = req.body
    const song = await updateSong(songId, body)
    res.send({ status: 200, response: song })
  } catch (e) {
    console.error(e)
  }
}

export const handleSongDelete = async (req: Request, res: Response) => {
  try {
    const { songId } = req.params
    const song = await deleteSong(songId)
    res.send({ status: 204, response: song })
  } catch (e) {
    console.error(e)
  }
}
