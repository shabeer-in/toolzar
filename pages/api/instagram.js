import igcraper from 'igcraper'
/**
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiResponse} res
 */
export default async (req, res) => {
    const { url } = req.query
    if (!url) {
        res.status(400).json({
            error: "url not provided"
        })
    }
    try {
        const IgCraper = new igcraper()
        const post = await IgCraper.getPost(url)

        const filtered = IgCraper.filterPost(post)
        res.json(filtered)
    } catch (error) {
        res.status(500).json({
            error: error
        })
    }
}