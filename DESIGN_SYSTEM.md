# DESIGN SYSTEM - COMPONENT SPECIFICATIONS

## Component Architecture

### Hero Section Component
```jsx
// Medical Practice Hero
<HeroSection>
  <GlassContainer className="hero-medical">
    <H1 className="hero-title">LÆGERNE TRUELSEN OG LYKKEGAARD</H1>
    <H2 className="hero-subtitle">Professionel lægehjælp med personlig omsorg</H2>
    <Description className="hero-description">
      To erfarne læger, der arbejder sammen om at give dig den bedste behandling
    </Description>
    <CTAGroup>
      <PrimaryButton>Book din tid</PrimaryButton>
      <SecondaryButton>Lær os at kende</SecondaryButton>
    </CTAGroup>
  </GlassContainer>
  <BackgroundElements>
    <FloatingOrb position="top-right" color="primary" />
    <FloatingOrb position="bottom-left" color="secondary" />
  </BackgroundElements>
</HeroSection>
```

**Styling Specifications:**
```css
.hero-medical {
  min-height: 100vh;
  background: linear-gradient(135deg, rgba(40, 182, 230, 0.1) 0%, rgba(53, 113, 177, 0.1) 100%);
  backdrop-filter: blur(20px);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.hero-title {
  font-size: clamp(2.5rem, 4vw, 4rem);
  font-weight: 700;
  color: var(--primary);
  margin-bottom: 1rem;
  text-shadow: 0 2px 10px rgba(40, 182, 230, 0.3);
}

.hero-subtitle {
  font-size: clamp(1.25rem, 2vw, 1.75rem);
  color: var(--secondary);
  margin-bottom: 1.5rem;
  font-weight: 300;
}
```

### Service Card Component
```jsx
// Medical Service Card
<ServiceCard>
  <CardHeader>
    <IconContainer>
      <MedicalIcon name={service.icon} />
    </IconContainer>
    <CardTitle>{service.title}</CardTitle>
  </CardHeader>
  <CardContent>
    <Description>{service.description}</Description>
    <FeatureList>
      {service.features.map(feature => (
        <FeatureItem key={feature.id}>
          <CheckIcon />
          <span>{feature.text}</span>
        </FeatureItem>
      ))}
    </FeatureList>
  </CardContent>
  <CardFooter>
    <LearnMoreButton>Læs mere</LearnMoreButton>
  </CardFooter>
</ServiceCard>
```

**Styling Specifications:**
```css
.service-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(40, 182, 230, 0.2);
  border-radius: 20px;
  padding: 2rem;
  transition: all 0.3s ease;
  box-shadow: 0 8px 32px rgba(40, 182, 230, 0.1);
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 40px rgba(40, 182, 230, 0.2);
  border-color: rgba(40, 182, 230, 0.3);
}

.service-icon {
  width: 64px;
  height: 64px;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
}
```

### Doctor Profile Component
```jsx
// Doctor Profile Card
<DoctorProfile>
  <ProfileImage>
    <img src={doctor.image} alt={doctor.name} />
    <GlassOverlay />
  </ProfileImage>
  <ProfileContent>
    <DoctorName>{doctor.name}</DoctorName>
    <Specialization>{doctor.specialization}</Specialization>
    <Biography>{doctor.bio}</Biography>
    <Qualifications>
      {doctor.qualifications.map(qual => (
        <QualificationItem key={qual.id}>
          <QualIcon />
          <span>{qual.title}</span>
        </QualificationItem>
      ))}
    </Qualifications>
    <ContactButton>Kontakt {doctor.firstName}</ContactButton>
  </ProfileContent>
</DoctorProfile>
```

**Styling Specifications:**
```css
.doctor-profile {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 3rem;
  background: rgba(248, 250, 252, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 24px;
  padding: 3rem;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.profile-image {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  aspect-ratio: 4/5;
}

.profile-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.glass-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(40, 182, 230, 0.1), rgba(53, 113, 177, 0.1));
  backdrop-filter: blur(2px);
}
```

### Contact Form Component
```jsx
// Medical Contact Form
<ContactForm>
  <FormHeader>
    <FormTitle>Book din tid</FormTitle>
    <FormDescription>Udfyld formularen nedenfor, så kontakter vi dig snarest</FormDescription>
  </FormHeader>
  <FormFields>
    <InputGroup>
      <FloatingLabel>Fulde navn</FloatingLabel>
      <GlassInput type="text" required />
    </InputGroup>
    <InputGroup>
      <FloatingLabel>Telefonnummer</FloatingLabel>
      <GlassInput type="tel" required />
    </InputGroup>
    <InputGroup>
      <FloatingLabel>Email</FloatingLabel>
      <GlassInput type="email" required />
    </InputGroup>
    <SelectGroup>
      <FloatingLabel>Vælg læge</FloatingLabel>
      <GlassSelect>
        <option value="">Ingen præference</option>
        <option value="truelsen">Dr. Truelsen</option>
        <option value="lykkegaard">Dr. Lykkegaard</option>
      </GlassSelect>
    </SelectGroup>
    <TextareaGroup>
      <FloatingLabel>Besked (valgfrit)</FloatingLabel>
      <GlassTextarea rows="4" />
    </TextareaGroup>
  </FormFields>
  <FormActions>
    <SubmitButton type="submit">Send besked</SubmitButton>
    <PrivacyNote>Vi respekterer din privathed og deler aldrig dine oplysninger</PrivacyNote>
  </FormActions>
</ContactForm>
```

**Styling Specifications:**
```css
.glass-input {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(40, 182, 230, 0.2);
  border-radius: 12px;
  padding: 1rem 1.5rem;
  width: 100%;
  font-size: 1rem;
  color: var(--dark);
  transition: all 0.3s ease;
}

.glass-input:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(40, 182, 230, 0.1);
  background: rgba(255, 255, 255, 0.2);
}

.floating-label {
  position: absolute;
  top: 50%;
  left: 1.5rem;
  transform: translateY(-50%);
  color: var(--secondary);
  font-size: 1rem;
  transition: all 0.3s ease;
  pointer-events: none;
}

.input-group:focus-within .floating-label,
.input-group.has-value .floating-label {
  top: 0;
  font-size: 0.875rem;
  background: rgba(255, 255, 255, 0.9);
  padding: 0 0.5rem;
  border-radius: 4px;
}
```

### Navigation Component
```jsx
// Medical Practice Navigation
<Navigation>
  <NavBrand>
    <Logo />
    <BrandText>LÆGERNE TRUELSEN OG LYKKEGAARD</BrandText>
  </NavBrand>
  <NavMenu>
    <NavItem>
      <NavLink href="/">Hjem</NavLink>
    </NavItem>
    <NavItem>
      <NavLink href="/om-os">Om os</NavLink>
    </NavItem>
    <NavItem dropdown>
      <NavDropdown trigger="Tjenester">
        <DropdownItem href="/tjenester/almenmedicin">Almenmedicin</DropdownItem>
        <DropdownItem href="/tjenester/forebyggelse">Forebyggelse</DropdownItem>
        <DropdownItem href="/tjenester/behandling">Behandling</DropdownItem>
      </NavDropdown>
    </NavItem>
    <NavItem>
      <NavLink href="/kontakt">Kontakt</NavLink>
    </NavItem>
  </NavMenu>
  <NavActions>
    <BookingButton>Book tid</BookingButton>
    <PhoneButton href="tel:27831444">27831444</PhoneButton>
  </NavActions>
</Navigation>
```

**Styling Specifications:**
```css
.navigation {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(40, 182, 230, 0.1);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  padding: 1rem 0;
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-link {
  color: var(--secondary);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  position: relative;
}

.nav-link:hover {
  color: var(--primary);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--primary);
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}
```

### Button System
```css
/* Primary Button - Medical Trust */
.btn-primary {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: white;
  border: none;
  border-radius: 12px;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 16px rgba(40, 182, 230, 0.3);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(40, 182, 230, 0.4);
}

/* Secondary Button - Glass Effect */
.btn-secondary {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  color: var(--primary);
  border: 1px solid rgba(40, 182, 230, 0.3);
  border-radius: 12px;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background: rgba(40, 182, 230, 0.1);
  border-color: var(--primary);
  transform: translateY(-1px);
}

/* Emergency Button - Urgent Care */
.btn-emergency {
  background: linear-gradient(135deg, #e74c3c, #c0392b);
  color: white;
  border: none;
  border-radius: 12px;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 16px rgba(231, 76, 60, 0.3);
}
```

### Layout Grid System
```css
/* Medical Practice Grid */
.medical-grid {
  display: grid;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.grid-hero {
  grid-template-columns: 1fr;
  min-height: 100vh;
}

.grid-services {
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin: 4rem 0;
}

.grid-doctors {
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin: 4rem 0;
}

.grid-contact {
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}

/* Responsive Breakpoints */
@media (max-width: 768px) {
  .grid-doctors,
  .grid-contact {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .medical-grid {
    padding: 0 1rem;
  }
}
```

### Animation Specifications
```css
/* Medical Trust Animations */
@keyframes medical-float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(2deg); }
}

@keyframes trust-glow {
  0%, 100% { box-shadow: 0 8px 32px rgba(40, 182, 230, 0.1); }
  50% { box-shadow: 0 12px 40px rgba(40, 182, 230, 0.2); }
}

@keyframes professional-shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

/* Apply animations */
.floating-orb {
  animation: medical-float 6s ease-in-out infinite;
}

.service-card {
  animation: trust-glow 4s ease-in-out infinite;
}

.shimmer-effect {
  background: linear-gradient(90deg, transparent, rgba(40, 182, 230, 0.1), transparent);
  background-size: 200% 100%;
  animation: professional-shimmer 2s ease-in-out infinite;
}
```

### Accessibility Specifications
```css
/* High Contrast Mode Support */
@media (prefers-contrast: high) {
  .glass-card {
    background: rgba(255, 255, 255, 0.95);
    border: 2px solid var(--primary);
  }
  
  .btn-primary {
    background: var(--primary);
    border: 2px solid var(--secondary);
  }
}

/* Reduced Motion Support */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* Focus Indicators */
.focusable:focus {
  outline: 3px solid var(--primary);
  outline-offset: 2px;
}

/* Screen Reader Only */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
```

### Performance Optimization
```css
/* GPU Acceleration */
.glass-card,
.floating-orb,
.service-card {
  will-change: transform;
  transform: translateZ(0);
}

/* Efficient Animations */
.smooth-transition {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
              opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Lazy Loading Placeholders */
.image-placeholder {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading-shimmer 2s infinite;
}

@keyframes loading-shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
```