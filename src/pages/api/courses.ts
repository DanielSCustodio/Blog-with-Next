import { NextApiRequest, NextApiResponse } from "next"

export default ( request: NextApiRequest, response: NextApiResponse ) => {
  const courses = [
    { id: 1, name: "Curso 01" },
    { id: 2, name: "Curso 02" },
    { id: 3, name: "Curso 03" },
    { id: 4, name: "Curso 04" },
    { id: 5, name: "Curso 05" },
  ]

  return response.json( courses )
}