import '@testing-library/jest-dom';
import projectsData from '../src/data/projects';

describe('Projects Data', () => {
  it('has valid project entries', () => {
    projectsData.forEach(project => {
      expect(project.title).toBeDefined();
      expect(project.description).toBeDefined();
      expect(project.url).toBeDefined();
      expect(project.image).toBeDefined();
    });
  });

  it('each project has a valid URL', () => {
    projectsData.forEach(project => {
      expect(project.url).toMatch(/^https?:\/\/.+/);
    });
  });
});