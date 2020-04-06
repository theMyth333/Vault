export default (req,res) => {
console.log(process.env.MSG);
res.status(200).json({ its: "working"});
}

