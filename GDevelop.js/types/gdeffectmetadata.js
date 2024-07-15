// Automatically generated by GDevelop.js/scripts/generate-types.js
declare class gdEffectMetadata {
  setFullName(fullName: string): gdEffectMetadata;
  setDescription(description: string): gdEffectMetadata;
  setHelpPath(helpPath: string): gdEffectMetadata;
  setIncludeFile(includeFile: string): gdEffectMetadata;
  addIncludeFile(includeFile: string): gdEffectMetadata;
  markAsNotWorkingForObjects(): gdEffectMetadata;
  markAsOnlyWorkingFor2D(): gdEffectMetadata;
  markAsOnlyWorkingFor3D(): gdEffectMetadata;
  markAsUnique(): gdEffectMetadata;
  getType(): string;
  getFullName(): string;
  getDescription(): string;
  getHelpPath(): string;
  isMarkedAsNotWorkingForObjects(): boolean;
  isMarkedAsOnlyWorkingFor2D(): boolean;
  isMarkedAsOnlyWorkingFor3D(): boolean;
  isMarkedAsUnique(): boolean;
  getProperties(): gdMapStringPropertyDescriptor;
  delete(): void;
  ptr: number;
};