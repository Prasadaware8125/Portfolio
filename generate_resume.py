import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_RIGHT

def create_pdf(filename):
    # 24pt margins (0.33 inch) for tight 1-page fit
    doc = SimpleDocTemplate(
        filename,
        pagesize=letter,
        leftMargin=28,
        rightMargin=28,
        topMargin=28,
        bottomMargin=28
    )

    styles = getSampleStyleSheet()

    # Color Palette
    primary_color = colors.HexColor("#0f172a") # Dark Slate
    accent_color = colors.HexColor("#0284c7")  # Professional Sky Blue
    text_color = colors.HexColor("#334155")    # Charcoal Text

    title_style = ParagraphStyle(
        'DocTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=18,
        leading=21,
        textColor=primary_color,
        alignment=TA_CENTER
    )

    subtitle_style = ParagraphStyle(
        'DocSubTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9.5,
        leading=12,
        textColor=accent_color,
        alignment=TA_CENTER
    )

    contact_style = ParagraphStyle(
        'DocContact',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8,
        leading=11,
        textColor=text_color,
        alignment=TA_CENTER
    )

    heading_style = ParagraphStyle(
        'SectionHeading',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=10,
        leading=12,
        textColor=primary_color,
        spaceBefore=4,
        spaceAfter=2
    )

    item_title_style = ParagraphStyle(
        'ItemTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9,
        leading=11,
        textColor=primary_color
    )

    body_style = ParagraphStyle(
        'BodyText',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8,
        leading=10.5,
        textColor=text_color
    )

    bullet_style = ParagraphStyle(
        'BulletText',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8,
        leading=10.5,
        textColor=text_color,
        leftIndent=8
    )

    story = []

    # 1. Header
    story.append(Paragraph("PRASAD JAYVANT AWARE", title_style))
    story.append(Spacer(1, 2))
    story.append(Paragraph("Software Engineer &bull; Full-Stack Developer &bull; B.Tech Information Technology", subtitle_style))
    story.append(Spacer(1, 3))
    story.append(Paragraph(
        "Solapur, Maharashtra, India &nbsp;|&nbsp; prasadaware6613@gmail.com &nbsp;|&nbsp; +91 8237463635<br/>"
        "LinkedIn: linkedin.com/in/prasad-aware-41590627b &nbsp;|&nbsp; GitHub: github.com/Prasadaware8125",
        contact_style
    ))
    story.append(Spacer(1, 4))
    story.append(HRFlowable(width="100%", thickness=1, color=colors.HexColor("#cbd5e1"), spaceAfter=4, spaceBefore=2))

    # 2. Education
    story.append(Paragraph("EDUCATION", heading_style))
    story.append(HRFlowable(width="100%", thickness=0.5, color=accent_color, spaceAfter=4, spaceBefore=1))
    
    edu_table_data = [
        [
            Paragraph("<b>Walchand Institute of Technology, Solapur</b><br/><font color='#475569'>Bachelor of Technology in Information Technology</font>", body_style),
            Paragraph("<b>2023 &ndash; June 2027</b><br/><font color='#0284c7'><b>CGPA: 9.48/10</b></font> &bull; <font color='#16a34a'>Graduation: June 2027</font>", ParagraphStyle('RightAlign', parent=body_style, alignment=TA_RIGHT))
        ]
    ]
    t_edu = Table(edu_table_data, colWidths=[350, 206])
    t_edu.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
    ]))
    story.append(t_edu)
    story.append(Spacer(1, 4))

    # 3. Technical Skills
    story.append(Paragraph("TECHNICAL SKILLS", heading_style))
    story.append(HRFlowable(width="100%", thickness=0.5, color=accent_color, spaceAfter=4, spaceBefore=1))
    
    skills_data = [
        [Paragraph("<b>Programming Languages:</b>", body_style), Paragraph("Java, JavaScript, Python, TypeScript, SQL, C", body_style)],
        [Paragraph("<b>Frontend Development:</b>", body_style), Paragraph("React.js, Redux, React Native, HTML5, CSS3, Tailwind CSS, Bootstrap, EJS", body_style)],
        [Paragraph("<b>Backend Development:</b>", body_style), Paragraph("Node.js, Express.js, REST APIs, JWT Authentication, Passport.js", body_style)],
        [Paragraph("<b>Databases:</b>", body_style), Paragraph("MongoDB, Mongoose, MySQL, Firebase", body_style)],
        [Paragraph("<b>Core Computer Science:</b>", body_style), Paragraph("Data Structures & Algorithms, Object-Oriented Programming, DBMS, OS, Computer Networks", body_style)],
        [Paragraph("<b>Tools & Platforms:</b>", body_style), Paragraph("Git, GitHub, Docker, Postman", body_style)]
    ]
    t_skills = Table(skills_data, colWidths=[125, 431])
    t_skills.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
    ]))
    story.append(t_skills)
    story.append(Spacer(1, 4))

    # 4. Key Projects
    story.append(Paragraph("KEY PROJECTS", heading_style))
    story.append(HRFlowable(width="100%", thickness=0.5, color=accent_color, spaceAfter=4, spaceBefore=1))

    # Project 1: FinVault Nexus
    proj1_table = [
        [
            Paragraph("<b>FinVault Nexus</b> &ndash; Full-Stack Banking Management System", item_title_style),
            Paragraph("<font color='#0284c7'>React.js, Redux, Node.js, Express.js, MongoDB, JWT</font>", ParagraphStyle('R1', parent=body_style, alignment=TA_RIGHT))
        ]
    ]
    t_p1 = Table(proj1_table, colWidths=[330, 226])
    t_p1.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0)]))
    story.append(t_p1)
    story.append(Paragraph("&bull; Engineered responsive full-stack banking management platform supporting secure account and transaction workflows.", bullet_style))
    story.append(Paragraph("&bull; Implemented JWT-based authentication, role authorization, REST APIs, Redux state management, and MongoDB persistence.", bullet_style))
    story.append(Paragraph("Frontend: <u>github.com/Prasadaware8125/Bank-Management-System-Frontend</u> | Backend: <u>github.com/Prasadaware8125/Bank-Management-System-Backend</u>", ParagraphStyle('SubLink', parent=bullet_style, fontSize=7.5, textColor=colors.HexColor("#475569"))))
    story.append(Spacer(1, 4))

    # Project 2: WanderLust
    proj2_table = [
        [
            Paragraph("<b>WanderLust</b> &ndash; Full-Stack Travel Listing Platform", item_title_style),
            Paragraph("<font color='#0284c7'>Node.js, Express.js, MongoDB, EJS, Passport.js, Cloudinary</font>", ParagraphStyle('R2', parent=body_style, alignment=TA_RIGHT))
        ]
    ]
    t_p2 = Table(proj2_table, colWidths=[320, 236])
    t_p2.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0)]))
    story.append(t_p2)
    story.append(Paragraph("&bull; Developed travel listing app with CRUD operations, ratings, review workflows, Cloudinary uploads, and MVC structure.", bullet_style))
    story.append(Paragraph("&bull; Integrated Passport.js authentication, Joi schema validation, reusable middleware, and centralized error handling.", bullet_style))
    story.append(Paragraph("Repository: <u>github.com/Prasadaware8125/WanderLust</u>", ParagraphStyle('SubLink2', parent=bullet_style, fontSize=7.5, textColor=colors.HexColor("#475569"))))
    story.append(Spacer(1, 4))

    # Project 3: KrishiSakhi
    proj3_table = [
        [
            Paragraph("<b>KrishiSakhi</b> &ndash; AI-Powered Smart Farming Platform <i>(Team Project &bull; Team Leader)</i>", item_title_style),
            Paragraph("<font color='#0284c7'>React Native, Python/ML, Firebase</font>", ParagraphStyle('R3', parent=body_style, alignment=TA_RIGHT))
        ]
    ]
    t_p3 = Table(proj3_table, colWidths=[360, 196])
    t_p3.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0)]))
    story.append(t_p3)
    story.append(Paragraph("&bull; Led Team AgriNova to build an AI farming platform with soil report analysis, weather alerts, and crop recommendations.", bullet_style))
    story.append(Paragraph("&bull; Awarded <b>2nd Place (Team Runner-Up) in Techathon 1.0</b> (State-Level Technical Competition) for project coordination.", bullet_style))
    story.append(Spacer(1, 4))

    # 5. Experience
    story.append(Paragraph("PROFESSIONAL EXPERIENCE", heading_style))
    story.append(HRFlowable(width="100%", thickness=0.5, color=accent_color, spaceAfter=4, spaceBefore=1))
    
    exp_table = [
        [
            Paragraph("<b>1M1B &ndash; Green Intern</b> <i>(In partnership with AICTE & supported by Salesforce)</i>", item_title_style),
            Paragraph("<b>July 2025 &ndash; August 2025</b>", ParagraphStyle('RExp', parent=body_style, alignment=TA_RIGHT))
        ]
    ]
    t_exp = Table(exp_table, colWidths=[400, 156])
    t_exp.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0)]))
    story.append(t_exp)
    story.append(Paragraph("&bull; Completed structured learning in sustainability frameworks, Tableau data visualization, and data-driven problem solving.", bullet_style))
    story.append(Paragraph("&bull; Collaborated on live sustainability data visualization projects to analyze metrics and present actionable solutions.", bullet_style))
    story.append(Spacer(1, 4))

    # 6. Achievements & Certifications
    story.append(Paragraph("ACHIEVEMENTS & CERTIFICATIONS", heading_style))
    story.append(HRFlowable(width="100%", thickness=0.5, color=accent_color, spaceAfter=4, spaceBefore=1))

    ach_data = [
        [Paragraph("&bull; <b>Techathon 1.0:</b> 2nd Place (Team Runner-Up) &bull; State-Level Technical Event (Team Leader &ndash; Team AgriNova)", bullet_style)],
        [Paragraph("&bull; <b>Problem Solving:</b> 300+ Data Structures & Algorithms problems solved across competitive coding platforms.", bullet_style)],
        [Paragraph("&bull; <b>LeetCode Badges:</b> 1 &times; 100-Day Streak Badge &bull; 2 &times; 50-Day Streak Badges for daily coding dedication.", bullet_style)],
        [Paragraph("&bull; <b>Certifications:</b> Alpha DSA Java (Apna College), Delta Full Stack (Apna College), Research Methodology (NPTEL Elite), AI-Assisted Coding (NASSCOM), Soft Skills (NPTEL).", bullet_style)]
    ]
    t_ach = Table(ach_data, colWidths=[556])
    t_ach.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0), ('BOTTOMPADDING', (0,0), (-1,-1), 1)]))
    story.append(t_ach)

    doc.build(story)
    print(f"Successfully generated 1-page PDF: {filename}")

if __name__ == "__main__":
    os.makedirs("public", exist_ok=True)
    create_pdf("public/Prasad_Aware_Resume.pdf")
    create_pdf("public/resume.pdf")
