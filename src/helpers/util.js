function Success(res, message) {
  res.status(200).json({
    message,
  });
}

function Bad(res, error) {
  res.status(400).json({
    error,
  });
}

function InternalServerError(res, error) {
  res.status(500).send({
    error,
  });
}

export { Bad, InternalServerError, Success };
