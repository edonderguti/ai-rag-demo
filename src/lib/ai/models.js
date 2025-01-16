// Define the models configuration
export const models = [
  {
    id: "gpt-4o-mini",
    label: "GPT 4o mini",
    apiIdentifier: "gpt-4o-mini",
    description: "Small model for fast, lightweight tasks",
  },
  {
    id: "gpt-4o",
    label: "GPT 4o",
    apiIdentifier: "gpt-4o",
    description: "For complex, multi-step tasks",
  },
];

// Set default model
export const DEFAULT_MODEL_NAME = "gpt-4o-mini";

// Helper function to validate if a model exists
export const isValidModel = (modelId) => {
  return models.some((model) => model.id === modelId);
};

// Helper function to get a model by ID
export const getModelById = (modelId) => {
  return models.find((model) => model.id === modelId);
};

// Helper function to get model description
export const getModelDescription = (modelId) => {
  const model = getModelById(modelId);
  return model ? model.description : "";
};
