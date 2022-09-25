export const validateSerializerMiddleware =
  (serializer) => async (req, res, next) => {
    try {
      const validatedBody = await serializer.validate(req.body, {
        stripUnknown: true, //Remove as propriedades que não estiverem no serializer
        abortEarly: false, //Mostra todos erros e não só o primeiro
      });

      req.validatedBody = validatedBody;

      return next();
    } catch (error) {
      return res.status(400).json({ error: error.errors });
    }
  };
