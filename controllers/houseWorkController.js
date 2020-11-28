const HouseWork = require('../models/HouseWork');








/* ----------------------------------
.          GET ALL HOUSEWORKS
---------------------------------- */
module.exports.get_all_house_works = async (req, res, next)=>{
  try {
    const allHouseWorks = await HouseWork.find({});

    res.json(allHouseWorks.reverse());

  } catch (err) {
    next(err, req, res);
  }
}








/* ----------------------------------
.        CREATE NEW HOUSEWORK
---------------------------------- */
module.exports.create_new_house_work = async (req, res, next)=>{
  try {
    
    const { title, rank } = req.body;

    const newHouseWork = HouseWork.create({
      title,
      rank,
      ownerId: req.user._id,
      createdAt: new Date(),
    });

    res.json(newHouseWork);

  } catch (err) {
    next(err, req, res);
  }
}





/* ----------------------------------
.          UPDATE HOUSEWORK
---------------------------------- */
module.exports.update_house_work = async (req, res, next)=>{
  try {
    const { houseWorkId } = req.body;

    await HouseWork.findByIdAndUpdate(houseWorkId, req.body);
    const updatedHouseWork = await HouseWork.findById(houseWorkId);

    
    res.json(updatedHouseWork);

  } catch (err) {
    next(err, req, res);
  }
}







/* ----------------------------------
.          DELETE HOUSEWORK
---------------------------------- */
module.exports.delete_house_work = async (req, res, next)=>{
  try {
    
    const { houseWorkId } = req.body;

    const deletedHouseWork = await HouseWork.findByIdAndRemove(houseWorkId);

    res.json(deletedHouseWork);

  } catch (err) {
    next(err, req, res);
  }
}


