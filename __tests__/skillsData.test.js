import '@testing-library/jest-dom';
import skillsData from '../src/data/skills';

describe('Skills Data', () => {
  it('contains all expected skills', () => {
    const expectedSkills = [
      'JavaScript', 'TypeScript', 'Python',
      'TailwindCSS', 'C', 'C++', 'Java',
      'React', 'Node.js', 'Git',
    ];
    expectedSkills.forEach(skill => {
      expect(skillsData).toContain(skill);
    });
  });

  it('has no duplicates', () => {
    const unique = new Set(skillsData);
    expect(unique.size).toBe(skillsData.length);
  });
});