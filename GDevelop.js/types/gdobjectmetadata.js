// Automatically generated by GDevelop.js/scripts/generate-types.js
declare class gdObjectMetadata {
  getName(): string;
  getFullName(): string;
  getDescription(): string;
  getIconFilename(): string;
  getHelpPath(): string;
  getCategoryFullName(): string;
  setCategoryFullName(categoryFullName: string): gdObjectMetadata;
  addScopedCondition(name: string, fullname: string, description: string, sentence: string, group: string, icon: string, smallicon: string): gdInstructionMetadata;
  addScopedAction(name: string, fullname: string, description: string, sentence: string, group: string, icon: string, smallicon: string): gdInstructionMetadata;
  addCondition(name: string, fullname: string, description: string, sentence: string, group: string, icon: string, smallicon: string): gdInstructionMetadata;
  addAction(name: string, fullname: string, description: string, sentence: string, group: string, icon: string, smallicon: string): gdInstructionMetadata;
  addExpression(name: string, fullname: string, description: string, group: string, smallicon: string): gdExpressionMetadata;
  addStrExpression(name: string, fullname: string, description: string, group: string, smallicon: string): gdExpressionMetadata;
  addExpressionAndCondition(type: string, name: string, fullname: string, description: string, sentenceName: string, group: string, icon: string): gdMultipleInstructionMetadata;
  addExpressionAndConditionAndAction(type: string, name: string, fullname: string, description: string, sentenceName: string, group: string, icon: string): gdMultipleInstructionMetadata;
  getAllActions(): gdMapStringInstructionMetadata;
  getAllConditions(): gdMapStringInstructionMetadata;
  getAllExpressions(): gdMapStringExpressionMetadata;
  getAllStrExpressions(): gdMapStringExpressionMetadata;
  setIncludeFile(includeFile: string): gdObjectMetadata;
  addIncludeFile(includeFile: string): gdObjectMetadata;
  getDefaultBehaviors(): gdSetString;
  hasDefaultBehavior(behaviorType: string): boolean;
  addDefaultBehavior(behaviorType: string): gdObjectMetadata;
  setHidden(): gdObjectMetadata;
  isHidden(): boolean;
  markAsRenderedIn3D(): gdObjectMetadata;
  isRenderedIn3D(): boolean;
  delete(): void;
  ptr: number;
};