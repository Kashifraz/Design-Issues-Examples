@Transactional
    public AssessmentDTO createAssessment(Long courseId, CreateAssessmentRequest request, Long professorId) {
        Course course = courseRepository.findById(courseId)
                .orElseThrow(() -> new RuntimeException("Course not found with id: " + courseId));

        if (course.getProfessor() == null || !course.getProfessor().getId().equals(professorId)) {
            throw new RuntimeException("You don't have permission to create assessments for this course");
        }

        User professor = userRepository.findById(professorId)
                .orElseThrow(() -> new RuntimeException("Professor not found with id: " + professorId));

        if (request.getAssessmentType() == Assessment.AssessmentType.ASSIGNMENT && request.getDeadline() == null) {
            throw new RuntimeException("Deadline is required for assignments");
        }
        if (request.getAssessmentType() == Assessment.AssessmentType.QUIZ && request.getTimeLimitMinutes() == null) {
            throw new RuntimeException("Time limit is required for quizzes");
        }
      ...
      ...
        return convertToDTO(assessment);
    }
